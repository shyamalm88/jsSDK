import MouseEventSDK from "./MouseEventSDK";

const sdk = new MouseEventSDK(200, 1000);
const textarea = document.getElementById("text-area");
document.getElementById("start-btn").addEventListener("click", sdk.start);
document.getElementById("stop-btn").addEventListener("click", sdk.stop);
document.getElementById("get-data-btn").addEventListener("click", () => {
  textarea.value = JSON.stringify(sdk.getData());
  // console.log(sdk.getData());
});
