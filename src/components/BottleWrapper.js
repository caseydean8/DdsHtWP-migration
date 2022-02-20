import React from "react";
import Bottle from "./Bottle";
import Vermouth from "../assets/1vermouth.png";
import PortWine from "../assets/2port-wine.png";
import Classic from "../assets/3classic.png";
import Straight from "../assets/4straight.png";
import Bonded from "../assets/5bonded.png";

const BottleWrapper = () => {
  return (
    <div className="bottle-wrapper">
      <Bottle image={Vermouth} />
      <Bottle image={PortWine} />
      <Bottle image={Classic} />
      <Bottle image={Straight} />
      <Bottle image={Bonded} />
    </div>
  );
};

export default BottleWrapper;
