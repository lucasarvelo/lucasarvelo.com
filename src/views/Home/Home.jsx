import React from "react";
import WelcomePicture from "../../components/WelcomePicture/WelcomePicture";
import WelcomeMenssage from "../../components/WelcomeMenssage/WelcomeMenssage";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row d-flex align-items-center">
        <WelcomePicture />
        <WelcomeMenssage />
      </div>
    </div>
  );
};

export default Home;
