import React from "react";
import "./WelcomeMenssage.scss";
const WelcomeMenssage = () => {
  return (
    <div className="col-md-8 p-4">
      <div className="row">
        <p className="text-center font-weight-bold text-monospace welcome-msg">
          Hi, My name is Lucas, web developer based on Ontario. <br />I enjoy my
          time building web apps with technologies like html, css or javascript
          and tools like react, vue, redux, vuex, bootstrap, material, node,
          express, mongodb or sass. <br />
          <br />I love to solve problem and getting lost in rabit holes where I
          can learn new skills.
        </p>
      </div>
      <div className="row welcome-msg-icons d-flex justify-content-around">
        <div>
          <i className="fab fa-js-square" />
        </div>
        <div>
          <i className="fab fa-react" />
        </div>
        <div>
          <i className="fab fa-vuejs" />
        </div>
        <div>
          <i className="fab fa-html5" />
        </div>
        <div>
          <i className="fab fa-css3-alt" />
        </div>
        <div>
          <i className="fab fa-bootstrap" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeMenssage;
