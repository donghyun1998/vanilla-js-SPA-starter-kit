import RootPage from '../pages/root-page/page.js';
import UseEffectPrac from '../pages/practice-useEffect/page.js';
import UseReducerPrac from '../pages/practice-useReducer/page.js';
import useStatePrac from '../pages/practice-useState/page.js';
/**
 * 원하는 경로에 따라 렌더링할 컴포넌트를 정의합니다.
 */
export const routes = [
  { path: /^\/$/, page: RootPage},
  { path: /^\/useState$/, page: useStatePrac},
  { path: /^\/useEffect$/, page: UseEffectPrac},
  { path: /^\/useReducer$/, page: UseReducerPrac},
  // 여기에 새로운 페이지을 추가하세요
]
