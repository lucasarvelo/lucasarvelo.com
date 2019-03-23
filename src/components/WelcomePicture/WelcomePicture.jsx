import React from "react";
import mainImage from "../../assets/Lucas-min.jpg";

function WelcomePicture() {
  return (
    <img
      src={mainImage}
      alt="Lucas"
      className="img-fluid rounded-lg border p-1 mx-auto d-block shadow"
      height="200"
      width="400"
    />
  );
}

export default WelcomePicture;
