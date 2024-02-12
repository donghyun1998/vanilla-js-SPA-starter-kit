import useReducer from "../../utils/useReducer.js";
import { importCss } from "../../utils/importCss.js";
import {navigate} from "../../utils/navigate.js";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      state.age += 1;
      return state;
    case "DECREMENT":
      state.age -= 1;
      return state;
    case "MEMBER":
      state.grade = 'member';
      return state;
    case "BACKEND":
      state.development = 'backend';
      return state;
    default:
      return state;
  }
}

export default function useReducerPrac($container) {
  const input = {name: '김동현', age: 25, organization: '42seoul', grade: 'learner', development: 'frontend'};
  const [getProfile, dispatch] = useReducer(reducer, input, this, "renderProfile");

  this.init = () => {
    this.render();
    this.renderProfile();
    $container.querySelector(".increase").addEventListener("click", () => {
      dispatch({ type: "INCREMENT" });
    });
    $container.querySelector(".decrease").addEventListener("click", () => {
      dispatch({ type: "DECREMENT" });
    });
    $container.querySelector(".change-grade").addEventListener("click", () => {
      dispatch({ type: "MEMBER" });
    });
    $container.querySelector(".change-end").addEventListener("click", () => {
      dispatch({ type: "BACKEND" });
    });
    $container.querySelector(".navigate-to-root").addEventListener("click", () => {
      navigate("/");
    });
  };

  this.render = () => {
    importCss("../style/card-page.css");
    $container.innerHTML = `
    	<div>
    		<div class="title">useReducer를 사용해 봅시다</div>
    	</div>
    	<div class="card" style="width: 18rem;"></div>
    	<button class="increase btn btn-primary">나이 증가</button>
      <button class="decrease btn btn-primary">나이 감소</button>
      <button class="change-grade btn btn-primary">멤버 승급</button>
      <button class="change-end btn btn-primary">백엔드 개발자로 전향</button>
      <button type="button" class="btn btn-secondary navigate-to-root">Go to root</button>
    `;
  };
  this.renderProfile = () => {
    const profile = getProfile();
    $container.querySelector(".card").innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${profile.name}</h5>
        <p class="card-text">나이: ${profile.age}세</p>
        <p class="card-text">단체: ${profile.organization} (${profile.grade})</p>
        <p class="card-text">관심 분야: ${profile.development}</p>
      </div>
    `;
  }

  this.init();
}
