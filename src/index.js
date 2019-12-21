import React from "react";
import ReactDOM from "react-dom";

const App = () => <div className="app">Hello ㅁㄴㅇㄹㄴㅁㅇㄹ world</div>;

ReactDOM.render(<App />, document.getElementById("app"));

if ("serviceWorker" in navigator) {
  // brower에서 service worker를 지원한다면
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker.js");
  });
}
