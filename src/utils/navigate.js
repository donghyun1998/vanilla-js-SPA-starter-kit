/**
 * @param  { string } to
 */
export const navigate = (to) => {
  const historyChangeEvent = new CustomEvent("historychange", {
    detail: {
      to
    }
  });

  dispatchEvent(historyChangeEvent); // historychange 이벤트를 발생시킵니다.
};
