import Router from "./src/router.js";

window.addEventListener("DOMContentLoaded", () => {
  new Router(document.querySelector("#app"));
});
