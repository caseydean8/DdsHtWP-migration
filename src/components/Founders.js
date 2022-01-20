import React from "react";
import foundersImg from "../assets/founders.jpg";

const Founders = () => {
  return (
    <div className="row founders">
      {/* add columns for bottles? */}
      <img src={foundersImg} alt="founders" />
    </div>
  );
};

export default Founders;
