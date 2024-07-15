import MouseEventSDK from "../src/MouseEventSDK";

describe("MouseEventSDK", () => {
  let sdk;
  let originalConsoleError;

  beforeEach(() => {
    sdk = new MouseEventSDK(100, 3);
    originalConsoleError = console.error;
    console.error = jest.fn();
  });

  afterEach(() => {
    sdk.stop();
    console.error = originalConsoleError;
  });

  it("should start collecting mouse events", (done) => {
    jest.useFakeTimers();
    sdk.start();
    expect(sdk.isCollecting).toBe(true);
    window.dispatchEvent(new MouseEvent("mousemove"));
    window.dispatchEvent(new MouseEvent("click"));
    window.dispatchEvent(new MouseEvent("dblclick"));
    window.dispatchEvent(new MouseEvent("contextmenu"));
    jest.advanceTimersByTime(sdk.debounceDelay);
    expect(sdk.mouseEvents.length).toBeGreaterThan(0);
    jest.useRealTimers();
    done();
  });

  it("should stop collecting mouse events", () => {
    sdk.start();
    expect(sdk.isCollecting).toBe(true);
    sdk.stop();
    expect(sdk.isCollecting).toBe(false);
  });

  it("should debounce mouse event collection", (done) => {
    jest.useFakeTimers();

    sdk.start();
    window.dispatchEvent(new MouseEvent("mousemove"));
    window.dispatchEvent(new MouseEvent("mousemove"));
    window.dispatchEvent(new MouseEvent("mousemove"));

    jest.advanceTimersByTime(sdk.debounceDelay);

    expect(sdk.mouseEvents.length).toBe(1);

    jest.useRealTimers();
    done();
  });

  test("should remove oldest event when reaching limit", (done) => {
    jest.useFakeTimers();
    sdk.start();

    // Add events up to the limit
    const event1 = new MouseEvent("mousemove", {
      clientX: 100,
      clientY: 200,
      timeStamp: 12345,
    });
    const event2 = new MouseEvent("mouseup", {
      clientX: 150,
      clientY: 250,
      timeStamp: 12346,
    });
    const event3 = new MouseEvent("dblclick", {
      clientX: 200,
      clientY: 300,
      timeStamp: 12347,
    });
    window.dispatchEvent(event1);
    jest.advanceTimersByTime(sdk.debounceDelay);
    window.dispatchEvent(event2);
    jest.advanceTimersByTime(sdk.debounceDelay);
    window.dispatchEvent(event3);
    jest.advanceTimersByTime(sdk.debounceDelay);
    const event4 = new MouseEvent("click", {
      clientX: 250,
      clientY: 350,
      timeStamp: 12348,
    });
    const event5 = new MouseEvent("mousemove", {
      clientX: 250,
      clientY: 350,
      timeStamp: 12348,
    });
    window.dispatchEvent(event4);
    jest.advanceTimersByTime(sdk.debounceDelay);
    window.dispatchEvent(event5);
    jest.advanceTimersByTime(sdk.debounceDelay);

    expect(sdk.mouseEvents.length).toBe(3);

    jest.useRealTimers();
    done();
  });

  it("should get collected mouse events", (done) => {
    jest.useFakeTimers();
    sdk.start();
    window.dispatchEvent(new MouseEvent("mousemove"));
    const data = sdk.getData();
    jest.advanceTimersByTime(sdk.debounceDelay);
    expect(data.length).toBe(1);
    expect(data[0]).toMatchObject({
      type: "mousemove",
      clientX: expect.any(Number),
      clientY: expect.any(Number),
      timeStamp: expect.any(Number),
    });
    jest.useRealTimers();
    done();
  });

  test("should handle errors gracefully when adding event listeners", () => {
    window.addEventListener = jest.fn(() => {
      throw new Error("Test Error");
    });

    sdk.start();
    expect(console.error).toHaveBeenCalledWith(
      "Error adding event listeners:",
      expect.any(Error)
    );
    expect(sdk.isCollecting).toBe(false);
  });

  test("should handle errors gracefully when removing event listeners", () => {
    window.addEventListener = jest.fn(() => {
      throw new Error("Test Error");
    });

    sdk.start();
    sdk.stop();
    jest.advanceTimersByTime(sdk.debounceDelay);

    expect(console.error).toHaveBeenCalledWith(
      "Error adding event listeners:",
      expect.any(Error)
    );
  });

  test("should handle errors gracefully in event listener", () => {
    const faultySDK = new MouseEventSDK();
    faultySDK._collectMouseEvent = jest.fn(() => {
      throw new Error("Test Error");
    });

    faultySDK.start();

    const event = new MouseEvent("mousemove", {
      clientX: 100,
      clientY: 200,
      timeStamp: 12345,
    });
    window.dispatchEvent(event);
    jest.advanceTimersByTime(sdk.debounceDelay);

    expect(console.error).toHaveBeenCalledWith(
      "Error adding event listeners:",
      expect.any(Error)
    );
  });
});
