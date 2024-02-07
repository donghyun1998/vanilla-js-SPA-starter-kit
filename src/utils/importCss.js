/**
 * @description CSS 파일을 동적으로 import 합니다.
 * @param {string} path
 */
export const importCss = (path) => {
  if (document.getElementsByTagName("head") !== null) {
    // 현재 문서에 존재하는 모든 <link> 태그를 찾음
    const existingLinks = document.getElementsByTagName("link");

    // 이미 동일한 href 속성을 가진 <link> 태그가 존재하면 return
    for (let i = 0; i < existingLinks.length; i++)
      if (existingLinks[i].getAttribute('href') === path)
        return ;
    document.getElementsByTagName("head")[0].insertAdjacentHTML(
      "beforeend",
      `<link rel="stylesheet" href="${path}"/>`
      );
    }
};
