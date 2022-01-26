import React from "react";
import foundersImg from "../assets/founders.jpg";

const Founders = () => {
  return (
    <div className="row">
      {/* <div className="col founders"></div> */}
      <img src={foundersImg} alt="founders" />
    </div>
  );
};

export default Founders;
