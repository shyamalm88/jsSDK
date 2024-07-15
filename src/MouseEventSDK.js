class MouseEventSDK {
  constructor(timer = 100, maxLengthOfEventQueue = 500) {
    this.mouseEvents = [];
    this.isCollecting = false;
    this.debounceDelay = timer;
    this.limit = maxLengthOfEventQueue;
    this.start = this.start.bind(this);
    this.stop = this.stop.bind(this);
    this.getData = this.getData.bind(this);
    this._debouncedMouseEvent = this._debounce(
      this._collectMouseEvent.bind(this),
      this.debounceDelay
    );
  }

  start() {
    if (this.isCollecting) return;
    this.isCollecting = true;

    try {
      window.addEventListener("mousemove", this._debouncedMouseEvent);
      window.addEventListener("mousedown", this._debouncedMouseEvent);
      window.addEventListener("mouseup", this._debouncedMouseEvent);
      window.addEventListener("click", this._debouncedMouseEvent);
      window.addEventListener("dblclick", this._debouncedMouseEvent);
      window.addEventListener("contextmenu", this._debouncedMouseEvent);
    } catch (error) {
      console.error("Error adding event listeners:", error);
      this.isCollecting = false;
    }
  }

  stop() {
    if (!this.isCollecting) return;
    this.isCollecting = false;

    try {
      window.removeEventListener("mousemove", this._debouncedMouseEvent);
      window.removeEventListener("mousedown", this._debouncedMouseEvent);
      window.removeEventListener("mouseup", this._debouncedMouseEvent);
      window.removeEventListener("click", this._debouncedMouseEvent);
      window.removeEventListener("dblclick", this._debouncedMouseEvent);
      window.removeEventListener("contextmenu", this._debouncedMouseEvent);
    } catch (error) {
      console.error("Error removing event listeners:", error);
    }
  }

  getData() {
    return this.mouseEvents;
  }

  _collectMouseEvent(event) {
    try {
      const { type, clientX, clientY, timeStamp } = event;
      if (this.mouseEvents.length === this.limit) {
        this.mouseEvents.shift();
        this.mouseEvents.push({ type, clientX, clientY, timeStamp });
      } else {
        this.mouseEvents.push({ type, clientX, clientY, timeStamp });
      }
    } catch (error) {
      console.error("Error collecting mouse event:", error);
    }
  }

  _debounce(func, delay) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }
}

export default MouseEventSDK;
