import React from "react";
import mainImage from "../../assets/Lucas-min.jpg";

function WelcomePicture() {
  return (
    <div>
      <img
        src={mainImage}
        alt="Lucas"
        className="img-fluid rounded-lg float-left border align-middle"
        height="200"
        width="400"
      />
    </div>
  );
}

export default WelcomePicture;
