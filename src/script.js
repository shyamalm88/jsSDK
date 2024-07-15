import MouseEventSDK from "./MouseEventSDK";

const sdk = new MouseEventSDK(200, 1000);
const textarea = document.getElementById("text-area");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");
const getDataBtn = document.getElementById("get-data-btn");

startBtn.addEventListener("click", sdk.start);
stopBtn.addEventListener("click", sdk.stop);
getDataBtn.addEventListener("click", () => {
  textarea.value = JSON.stringify(sdk.getData());
  // console.log(sdk.getData());
});
