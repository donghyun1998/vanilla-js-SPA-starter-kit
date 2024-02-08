
function deepEqual(a, b) {
  // 두 인자의 타입이 다르면 바로 false 반환
  if (typeof a !== typeof b) return false;
  // 기본 타입이거나 함수인 경우, 단순 비교
  if (a === b || typeof a === "function") return true;
  // 둘 중 하나라도 null이면, 둘 다 null인지 확인 (위에서 === 비교를 했으므로 여기는 둘 다 null일 수 없음)
  if (a === null || b === null) return false;
  // 배열인 경우, 길이와 각 요소 비교
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  // 객체인 경우, 키의 개수와 각 키의 값을 비교
  if (isObject(a) && isObject(b)) {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (const key of keysA) {
      if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }
    return true;
  }
    // 타입이 매칭되지 않는 경우
  return false;
}

function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

/**
 * @description useState 훅 구현
 * @param {array | number | string | boolean | Object}stateInput 상태
 * @param {object}component 전달된 컴포넌트
 * @param {string}render 렌더링 함수 명
 * @returns [getState, setState] 반환
 * @description 배열이 인자로 올 때 동작이 다르니 유의해서 사용하세요
 */
export default function useState(stateInput, component, render) {
  if (Array.isArray(stateInput)) {
    // 배열일 경우
    let state = [...stateInput];
    const getState = () => {
      return state;
    };
    const setState = (newState) => {
      if (deepEqual(state, newState)) return; // 이전 상태와 새로운 상태가 같으면 렌더링 하지 않음
      state = [...newState];
      component[render](); // render 메서드 호출
    };
    return [getState, setState];
  } else if (typeof stateInput === "object") {
    // 객체일 경우 (단, null과 배열 제외)
    let state = { ...stateInput };
    const getState = () => {
      return state;
    };
    const setState = (newState) => {
      if (deepEqual(state, newState)) return; // 이전 상태와 새로운 상태가 같으면 렌더링 하지 않음
      state = { ...newState };
      component[render](); // render 메서드 호출
    };
    return [getState, setState];
  } else {
    // 기본형(primitive) 데이터 타입일 경우
    let state = stateInput;
    const getState = () => {
      return state;
    };
    const setState = (newState) => {
      console.log(state, newState);
      if (deepEqual(state, newState)) return; // 이전 상태와 새로운 상태가 같으면 렌더링 하지 않음
      state = newState;
      component[render](); // render 메서드 호출
    };
    return [getState, setState];
  }
}
