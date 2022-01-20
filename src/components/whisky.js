import React from "react";
import whiskeyText from "../assets/whiskey-text.jpg";
import vermouth from "../assets/1vermouth.png";
import port from "../assets/2port-wine.png";
import classic from "../assets/3classic.png";
import straight from "../assets/4straight.png";
import bonded from "../assets/5bonded.png";

const Whiskey = () => {
  return (
    <div className="row whiskey">
      {/* <img src={whiskeyText} alt="whiskey text" /> */}

      <div className="col bottle">
        <img className="bottle-img" src={vermouth} alt="" />
      </div>
      <div className="col bottle">
        <img className="bottle-img" src={port} alt="" />
      </div>
      <div className="col bottle">
        <img className="bottle-img" src={classic} alt="" />
      </div>

      <div className="col bottle">
        <img className="bottle-img" src={straight} alt="" />
      </div>
      <div className="col bottle">
        <img className="bottle-img" src={bonded} alt="" />
      </div>
    </div>
  );
};

export default Whiskey;
