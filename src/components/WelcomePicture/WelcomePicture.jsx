import React from "react";
import mainImage from "../../assets/Lucas-min.jpg";

const WelcomePicture = () => {
  return (
    <div className="col-md-4 p-4">
      <img
        src={mainImage}
        alt="Lucas"
        className="img-fluid rounded-lg border p-1 mx-auto d-block shadow"
        height="200"
        width="400"
      />
    </div>
  );
};

export default WelcomePicture;
