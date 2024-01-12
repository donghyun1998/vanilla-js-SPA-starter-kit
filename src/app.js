import Router from "./router.js";

export default function App($container) {
  this.$container = $container;

  const init = () => {
    new Router($container);
  };

  init();
}
