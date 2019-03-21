import React from "react";
import WelcomePicture from "../WelcomePicture/WelcomePicture";
import WelcomeMenssage from "../WelcomeMenssage/WelcomeMenssage";
export default function Home() {
  return (
    <React.Fragment>
      <WelcomePicture />
      <WelcomeMenssage />
    </React.Fragment>
  );
}
