import { navigate } from "../../utils/navigate.js";

export default function chooseGameMode($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
    <button id="button2">go to home</button>
	  <div style="width: 1440px; height: 1024px; position: relative; background: linear-gradient(180deg, #191D40 0%, #45003B 100%)">
  <div style="width: 610px; height: 706px; left: 894px; top: 159px; position: absolute; opacity: 0.25">
    <img style="width: 610px; height: 610px; left: 0px; top: 0px; position: absolute" src="https://via.placeholder.com/610x610" />
    <div style="width: 344px; left: 133px; top: 586px; position: absolute; text-align: center; color: white; font-size: 35px; font-family: Galmuri11; font-weight: 400; line-height: 60px; word-wrap: break-word">다양한 모드로     게임을 즐길 수 있다.</div>
    <div style="left: 126px; top: 492px; position: absolute; text-align: center; color: #FF77C5; font-size: 45px; font-family: Galmuri11; font-weight: 400; word-wrap: break-word">사용자 지정 모드</div>
    <div style="left: 129px; top: 489px; position: absolute; text-align: center; color: white; font-size: 45px; font-family: Galmuri11; font-weight: 400; word-wrap: break-word">사용자 지정 모드</div>
  </div>
  <div style="width: 403px; height: 549px; left: 544px; top: 316px; position: absolute; opacity: 0.50">
    <img style="width: 295px; height: 295px; left: 53px; top: 0px; position: absolute" src="https://via.placeholder.com/295x295" />
    <div style="left: 0px; top: 429px; position: absolute; text-align: center; color: white; font-size: 35px; font-family: Galmuri11; font-weight: 400; line-height: 60px; word-wrap: break-word">랜덤으로 4명의 사용자와     토너먼트 경기를 치른다.</div>
    <div style="left: 53px; top: 335px; position: absolute; text-align: center; color: #FF77C5; font-size: 45px; font-family: Galmuri11; font-weight: 400; word-wrap: break-word">토너먼트 모드</div>
    <div style="left: 57px; top: 332px; position: absolute; text-align: center; color: white; font-size: 45px; font-family: Galmuri11; font-weight: 400; word-wrap: break-word">토너먼트 모드</div>
  </div>
  <div style="width: 391px; height: 579px; left: 86px; top: 286px; position: absolute; opacity: 0.50">
    <img style="width: 356px; height: 356px; left: 17px; top: 0px; position: absolute" src="https://via.placeholder.com/356x356" />
    <div style="left: 107px; top: 365px; position: absolute; text-align: center; color: #FF77C5; font-size: 45px; font-family: Galmuri11; font-weight: 400; word-wrap: break-word">2P 모드</div>
    <div style="left: 111px; top: 362px; position: absolute; text-align: center; color: white; font-size: 45px; font-family: Galmuri11; font-weight: 400; word-wrap: break-word">2P 모드</div>
    <div style="left: 0px; top: 459px; position: absolute; text-align: center; color: white; font-size: 35px; font-family: Galmuri11; font-weight: 400; line-height: 60px; word-wrap: break-word">한 컴퓨터에서 두 명의     사용자가 경기를 치른다.</div>
  </div>
  <div style="width: 1440px; height: 123px; left: 0px; top: 19px; position: absolute; background: rgba(255, 255, 255, 0); border-radius: 2px; overflow: hidden; border: 1px rgba(0, 0, 0, 0.10) solid">
    <div style="width: 49.06px; height: 40.50px; left: 1359px; top: 41px; position: absolute; border: 5px white solid"></div>
    <div style="left: 566px; top: 31px; position: absolute; text-align: center; color: #FBFF3E; font-size: 48px; font-family: Galmuri11; font-weight: 700; word-wrap: break-word">사십 이 초-월</div>
    <img style="width: 89px; height: 89px; left: 1230px; top: 17px; position: absolute; border: 6px white solid" src="https://via.placeholder.com/89x89" />
    <img style="width: 89px; height: 89px; left: 117px; top: 107px; position: absolute; transform: rotate(-180deg); transform-origin: 0 0" src="https://via.placeholder.com/89x89" />
  </div>
  <div id="button">fdfdfd</div>
</div>
	  `;
  };

  this.render();
  $container.addEventListener("click", (e) => {
    if (e.target.id === "button2") {
      navigate("/");
    }
  });
}
