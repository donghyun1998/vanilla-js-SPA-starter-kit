export default function NotFound($container) {
  this.$container = $container;

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    this.$container.innerHTML = `
    <div style="width: 1440px; height: 1024px; position: relative; background: #0000AA">
    <div style="width: 1440px; height: 123px; left: 0px; top: 19px; position: absolute; background: rgba(255, 255, 255, 0); border-radius: 2px; border: 1px rgba(0, 0, 0, 0.10) solid"></div>
    <div style="left: 401px; top: 324px; position: absolute; text-align: center"><span style="color: rgba(0, 0, 0, 0.20); font-size: 130px; font-family: Galmuri11; font-weight: 700; word-wrap: break-word">4 0 4 !<br/></span><span style="color: white; font-size: 70px; font-family: Galmuri11; font-weight: 700; word-wrap: break-word"><br/>페이지를 못 찾겠다.</span></div>
  </div>
    `;
  };

  this.render();
}


