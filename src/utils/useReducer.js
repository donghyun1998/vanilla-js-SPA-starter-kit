function deepCopy(obj) {
  if (Array.isArray(obj)) {
    return obj.map((item) => deepCopy(item));
  } else if (isObject(obj)) {
    return Object.keys(obj).reduce((acc, key) => {
      acc[key] = deepCopy(obj[key]);
      return acc;
    }, {});
  } else {
    return obj;
  }
}
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}

/**
 * useReducer
 * @param {function} reducer
 * @param {Array | Object | number | string | boolean} stateInput
 * @param {HTMLElement} component
 * @param {string} render
 * @returns
 */
export default function useReducer(reducer, stateInput, component, render) {
  let state = stateInput;
  const getState = () => {
    return state;
  };
  const dispatch = (action) => {
    let newState = deepCopy(state);
    reducer(newState, action);
    state = newState;
    component[render]();
  };
  return [getState, dispatch];
}
