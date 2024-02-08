import RootPage from '../pages/root-page/page.js';
import Card from '../pages/practice-useState/page.js';
import UseEffectPrac from '../pages/practice-useEffect/page.js';
/**
 * 원하는 경로에 따라 렌더링할 컴포넌트를 정의합니다.
 */
export const routes = [
  { path: /^\/$/, page: RootPage},
  { path: /^\/card$/, page: Card},
  { path: /^\/useEffect$/, page: UseEffectPrac}
  // 여기에 새로운 페이지을 추가하세요
]
