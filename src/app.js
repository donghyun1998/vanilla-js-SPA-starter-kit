import Router from "./router.js";
/**
 * @param {HTMLElement} $container
 */
export default function App($container) {
  this.$container = $container;

  const init = () => {
    new Router($container);
  };

  init();
}
