import component from "./component.js";
import {importCss} from "../../utils/importCss.js";
import {navigate} from "../../utils/navigate.js";

export default function RootPage($container) {

  this.init = () => {
    this.render();
    $container.querySelector('.navigate-to-card').addEventListener('click', () => {
      navigate('/card');
    });
  }

  this.render = () => {
    importCss("../style/root-page.css");
    $container.innerHTML = `
      <div>
        <div class="title">Root Page</div>
        ${component(1)}
        ${component(2)}
        ${component(3)}
        ${component(4)}
        ${component(5)}
      </div>
      <button type="button" class="btn btn-secondary navigate-to-card">Go to Card</button>
    `;
  }

  this.init();
}