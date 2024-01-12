import { navigate } from "../../utils/navigate.js";

export default function Main($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
    <button id="button">go to makeNickname</button>
    `;
  };

  this.render();
  $container.addEventListener("click", (e) => {
    if (e.target.id === "button") {
      navigate("/makeNickname")
    }
  })
}
