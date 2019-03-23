import React from "react";
import "./WelcomeMenssage.scss";
function WelcomeMenssage() {
  return (
    <div className="col">
      <div className="row">
        <p className="text-justify font-weight-bold text-monospace welcome-msg">
          Hi, My name is Lucas, and I'm Ontario based Web Developer. <br />I
          enjoy my time building web apps with technologies like react, vue,
          redux, html, css or javascript. <br />
          <br />I love to solve problem and getting lost in rabit holes where I
          can learn new skills.
        </p>
      </div>
      <div className="row welcome-msg-icons d-flex justify-content-around">
        <div>
          <i className="fab fa-js-square m-3" />
        </div>
        <div>
          <i className="fab fa-react m-3" />
        </div>
        <div>
          <i className="fab fa-vuejs m3" />
        </div>
        <div>
          <i className="fab fa-html5 m-3" />
        </div>
        <div>
          <i className="fab fa-css3-alt m-3" />
        </div>
      </div>
    </div>
  );
}

export default WelcomeMenssage;
