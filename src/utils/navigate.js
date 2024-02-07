/**
 * @param  { string } to
 * @param  { boolean } isReplace
 */
export const navigate = (to, isReplace = false) => {
  const historyChangeEvent = new CustomEvent("historychange", {
    detail: {
      to,
      isReplace,
    },
  });

  dispatchEvent(historyChangeEvent); // historychange 이벤트를 발생시킵니다.
};
