// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

console.log("Yolo");
var webview = document.getElementById("whatsapp1");
webview.addEventListener("dom-ready", function() {
  webview.openDevTools();
});
var webview2 = document.getElementById("whatsapp2");
webview2.addEventListener("dom-ready", function() {
  webview2.openDevTools();
});
