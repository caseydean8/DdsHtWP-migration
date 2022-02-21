import React from "react";
import Bottle from "./Bottle";
import Vermouth from "../assets/1vermouth.png";
import PortWine from "../assets/2port-wine.png";
import Classic from "../assets/3classic.png";
import Straight from "../assets/4straight.png";
import Bonded from "../assets/5bonded.png";

const BottleWrapper = () => {
  return (
    <div className="bottle-container">
      <Bottle image={Vermouth} flavor={"VERMOUTH FINISH"} />
      <Bottle image={PortWine} flavor={"PORT WINE FINISH"} />
      <Bottle image={Classic} flavor={"CLASSIC RYE"} />
      <Bottle image={Straight} flavor={"STRAIGHT RYE"} />
      <Bottle image={Bonded} flavor={"BONDED RYE"} />
    </div>
  );
};

export default BottleWrapper;
