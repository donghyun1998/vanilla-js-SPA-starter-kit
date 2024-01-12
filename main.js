import App from "./src/app.js";
import { $ } from "./src/utils/querySelector.js";

window.addEventListener("DOMContentLoaded", (e) => {
  new App($("#app"));
});
