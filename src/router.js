import { routes } from "./constants/routeInfo.js";
/**
 * @param {HTMLElement} $container
 */
export default function Router($container) {
  const findMatchedRoute = () =>
    routes.find((route) => route.path.test(location.pathname));

  const route = () => {
    const TargetPage = findMatchedRoute()?.page // 현재 경로에 따라 렌더링할 컴포넌트를 정의합니다.
    new TargetPage($container);
  };

  const init = () => { // 페이지 이동 시 발생하는 이벤트를 정의합니다.
    window.addEventListener("historychange", ({ detail }) => {
      const { to } = detail;
      // 같은 페이지로 이동할 때는 history를 쌓지 않습니다.
      if (to === location.pathname)
        history.replaceState(null, "", to);
      else {
        history.pushState(null, "", to);
        route();
      }
    });
    // 뒤로가기 눌렀을 때 발생하는 이벤트를 정의합니다.
    window.addEventListener("popstate", () => {
      route();
    });
  };

  init();
  route();
}
