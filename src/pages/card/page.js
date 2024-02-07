import useState from "../../utils/useState.js";
import {importCss} from "../../utils/importCss.js";
import {navigate} from "../../utils/navigate.js";

export default function card($container) {
  let inputData = {name: '김동현', age: 25}
  let [getData, setData] = useState(inputData, this, 'renderCard');

  this.init = () => {
    this.render();
    this.renderCard();
    $container.querySelector('.increase-age').addEventListener('click', () => {
      let state = {...getData()}; // 깊은 복사 해주려고 구조할당분해 사용
      state.age += 1;
      console.log(state, getData());
      setData(state);
    });
    $container.querySelector('.navigate-to-root').addEventListener('click', () => {
      navigate('/');
    });
  }
  this.renderCard = () => {
    $container.querySelector('.card').innerHTML = `
      <div class="name">제 이름은 ${getData().name} ${getData().age}살 이죠 </div>
    `;
  }

  this.render = () => {
    importCss("../style/card-page.css");
    $container.innerHTML = `
      <div>
        <div class="title">useState를 사용해 봅시다</div>
        <div class="card"></div>
        <button class="increase-age">한 살 먹기</button>
      </div>
      <button class="navigate-to-root">Go to Root</button>
    `;
  }

  this.init();
}