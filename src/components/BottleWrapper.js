import React from "react";
import Bottle from "./Bottle";
import Vermouth from "../assets/1vermouth.png";
import vermTxt from '../assets/vermTxt';
import PortWine from "../assets/2port-wine.png";
import Classic from "../assets/3classic.png";
import Straight from "../assets/4straight.png";
import Bonded from "../assets/5bonded.png";
// import BottleModal from "./BottleModal";

const BottleWrapper = () => {
  return (
    <div className="bottle-container">
      Press button for modal
      <Bottle image={Vermouth} flavor={"VERMOUTH FINISH"} modalText={vermTxt} modalSelect={"verm"} />
      <Bottle image={PortWine} flavor={"PORT WINE FINISH"} modalSelect={"port"} />
      <Bottle image={Classic} flavor={"CLASSIC RYE"} modalSelect={"clas"} />
      <Bottle image={Straight} flavor={"STRAIGHT RYE"} modalSelect={"straight"} />
      <Bottle image={Bonded} flavor={"BONDED RYE"} modalSelect={"bond"} />
      {/* <BottleModal flavor={this.flavor} /> */}
    </div>
  );
};

export default BottleWrapper;
