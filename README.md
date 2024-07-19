---

# VanillaJS SPA Starter Kit

본 Starter Kit은 순수 VanillaJS를 사용하여 Single Page Application(SPA)을 구축하기 위한 기본 템플릿입니다. 이 프로젝트는 라우팅, 상태 관리 등을 포함하고 있습니다.

클래스형 컴포넌트에 react hook 패턴을 추가한 형태입니다.

파일 트리는 next.js의 app router와 유사하게 구성했습니다.

## 기능

- **라우팅**: History API를 사용하여 SPA 내부에서의 페이지 이동 구현.
- **상태 관리**: 클로저를 활용한 `useState`와 `useReducer`로 컴포넌트 상태 관리.
- **사이드 이펙트 관리**: `MutationObserver`를 이용한 `useEffect` 구현으로 DOM 변경 감지 및 처리.

## 시작하기

### 설치

1. 레포지토리를 클론합니다.
    ```bash
    git clone git@github.com:donghyun1998/vanilla-js-SPA-starter-kit.git
    ```

2. 의존성을 설치합니다.
    ```bash
    npm install
    ```

### 개발 서버 실행

아래 명령어를 사용하여 개발 서버를 실행할 수 있습니다. 개발 서버는 자동으로 브라우저를 열고 애플리케이션을 불러옵니다.

```bash
npm run dev
```

## 프로젝트 구조

- `/src`: 소스 코드 디렉토리. 여기에는 SPA 구현을 위한 JavaScript 파일들이 포함됩니다.

```
├── constants
│   └── routeInfo.js // router에서 참조할 컴포넌트 배열
├── pages // 페이지들이 저장될 디렉토리
│   ├── practice-useEffect
│   │   └── page.js // 각 페이지들의 메인 컴포넌트
│   ├── practice-useReducer
│   │   └── page.js
│   ├── practice-useState
│   │   └── page.js
│   └── root-page
│       ├── component.js
│       └── page.js
├── router.js
└── utils
    ├── importCss.js
    ├── navigate.js
    ├── useEffect.js
    ├── useReducer.js
    └── useState.js
 ``` 

### 주요 파일

- `router.js`: SPA 내부 라우팅 로직을 담당하는 파일.
- `useState.js`, `useReducer.js`: 상태 관리 훅 구현 파일.
- `useEffect.js`: 사이드 이펙트 관리를 위한 훅 구현 파일.

## 빌드

프로덕션 환경을 위한 빌드는 아래 명령어로 실행할 수 있습니다. 빌드 과정을 통해 최적화된 정적 파일들이 생성됩니다.

```bash
npm run build
```

## 기여하기

본 프로젝트에 기여를 원하신다면, 풀 리퀘스트를 보내주시거나 이슈를 등록해 주세요. 모든 기여에 대해 감사드립니다.

---
useState구현기록 ..
https://donghyk2.tistory.com/144

useEffect구현기록 ..
https://donghyk2.tistory.com/146

useReducer구현기록 ..
https://donghyk2.tistory.com/148

해당 스타터킷으로 개발 할 경우 webstorm ide 추천합니다. (백틱 안의 html코드 문법 강조 가능)
