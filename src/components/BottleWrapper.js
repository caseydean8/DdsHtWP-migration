import React from "react";
import Bottle from "./Bottle";
import Vermouth from "../assets/1vermouth.png";
import VermouthF from "./VermouthF";
import PortWine from "../assets/2port-wine.png";
import Classic from "../assets/3classic.png";
import Straight from "../assets/4straight.png";
import Bonded from "../assets/5bonded.png";

const BottleWrapper = () => {
  return (
    <div className="bottle-container">
      {/* Press button for modal */}
      <Bottle
        id={"#vermouth"}
        image={Vermouth}
        flavor={"VERMOUTH\nFINISH"}
        modalContent={VermouthF}
        modalSelect={"verm"}
      />
      <Bottle
        id={"#port-wine"}
        image={PortWine}
        flavor={"PORT WINE \n FINISH"}
        modalSelect={"port"}
      />
      <Bottle
        id={"#classic-rye"}
        image={Classic}
        flavor={"CLASSIC \n RYE"}
        modalSelect={"classic"}
      />
      <Bottle
        id={"#straight-rye"}
        image={Straight}
        flavor={"STRAIGHT \n RYE"}
        modalSelect={"straight"}
      />
      <Bottle
        id={"#bonded-rye"}
        image={Bonded}
        flavor={"BONDED \n RYE"}
        modalSelect={"bond"}
      />
    </div>
  );
};

export default BottleWrapper;
