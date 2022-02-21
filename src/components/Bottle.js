import React from "react";
// imr: import React from 'react'
import Keystone from "../assets/keystone-divider.png";

const Bottle = (props) => {
  return (
    <div className="bottle-wrapper">
      <div className="bottle">
        <img className="bottle-img" src={props.image} alt={props.alt} />
      </div>
      <div className="keystone-divider">
        <img src={Keystone} alt="keystone divider" />
        <p className="keystone-text">{props.flavor}</p>
      </div>
    </div>
  );
};

export default Bottle;
// exp: export default moduleName
