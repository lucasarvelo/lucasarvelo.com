import React from "react";
import WelcomePicture from "../../components/WelcomePicture/WelcomePicture";
import WelcomeMenssage from "../../components/WelcomeMenssage/WelcomeMenssage";
export default function Home() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4">
          <WelcomePicture />
        </div>
        <div className="col-md-8">
          <WelcomeMenssage />
        </div>
      </div>
    </div>
  );
}
