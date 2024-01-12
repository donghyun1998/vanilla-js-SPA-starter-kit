import { navigate } from "../../utils/navigate.js";
export default function makeNickname($container) {
	this.$container = $container;

	this.setState = () => {
	  this.render();
	};

	this.render = () => {
	  this.$container.innerHTML = `
	  <button id="button1">go to chooseGameMode</button>
	  <div style="width: 1440px; height: 1024px; position: relative; background: linear-gradient(180deg, #191D40 0%, #45003B 100%)">
	  <div style="width: 1440px; height: 123px; left: 0px; top: 155px; position: absolute; background: rgba(255, 255, 255, 0); border-radius: 2px; overflow: hidden">
		<div style="left: 515px; top: 21px; position: absolute; text-align: center; color: #FBFF3E; font-size: 64px; font-family: Galmuri11; font-weight: 700; word-wrap: break-word">사십 이 초-월</div>
	  </div>
	  <div style="width: 788px; height: 440px; left: 319px; top: 353px; position: absolute; background: rgba(255, 255, 255, 0); box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25); border: 5px #FF79C5 solid"></div>
	  <div style="width: 788px; height: 440px; left: 319px; top: 353px; position: absolute; background: rgba(255, 255, 255, 0); box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25)"></div>
	  <div style="width: 650px; height: 104px; left: 396px; top: 558px; position: absolute; background: white; border: 3px #C7C7C7 solid"></div>
	  <div style="left: 516px; top: 450px; position: absolute; text-align: center; color: white; font-size: 64px; font-family: Galmuri11; font-weight: 400; word-wrap: break-word">별명을 적어라</div>
	  <div style="left: 417px; top: 567px; position: absolute; text-align: center; color: rgba(0, 0, 0, 0.50); font-size: 64px; font-family: Galmuri11; font-weight: 400; word-wrap: break-word">최대 8글자 가능하다</div>
	</div>
	  `;
	};

	this.render();
	$container.addEventListener("click", (e) => {
		if (e.target.id === "button1") {
		  navigate("/chooseGameMode")
		}
	  })
  }
