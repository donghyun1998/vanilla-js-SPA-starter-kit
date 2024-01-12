/**
 * jQuery같이 querySelector를 사용하기 위한 함수
 * @param {HTMLElement} selector dom selector
 * @returns dom element
 */
export const $ = (selector) => {
  const result = document.querySelector(selector);
  if (!(result instanceof HTMLElement)) return null;

  return result;
}
