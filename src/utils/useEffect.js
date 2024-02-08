/**
 * MutationObserver를 사용하여 대상 요소의 변화를 감지하는 Hook
 * @param {function()}callback
 * @param {HTMLElement}targetNode
 * @returns {function() | void}
 */

export default function useEffect(callback, targetNode) {
  // 대상 요소가 유효한지 확인
  if (!targetNode) {
    console.error('useEffect: 대상 요소가 지정되지 않았거나 존재하지 않습니다.');
    return;
  }
  // 기본 감시 옵션 설정     속성 변화 감지 |  자식 요소 변화 감지 | 모든 후손 요소 변화 감지 | 텍스트 노드 변화 감지
  const config = { attributes: true, childList: true, subtree: true, characterData: true};

  // MutationObserver 콜백 정의
  const observerCallback = () => {
    callback(); // 변화가 감지될 때 콜백 함수 실행
  };

  // MutationObserver 인스턴스 생성
  const observer = new MutationObserver(observerCallback);

  // 감시 시작
  observer.observe(targetNode, config);

  // 정리(Cleanup) 함수 반환
  return () => observer.disconnect(); // 이 함수를 호출하여 감시를 중지
}

