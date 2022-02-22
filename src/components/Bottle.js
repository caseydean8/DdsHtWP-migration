import React from "react";
// imr: import React from 'react'
import Keystone from "../assets/keystone-divider.png";
import BottleModal from './BottleModal';

const Bottle = (props) => {
  return (
    <div className="modal-wrapper">
      <div className="bottle-wrapper">
        <div className="bottle">
          <img className="bottle-img" src={props.image} alt={props.alt} />
        </div>
        <button
          type="button"
          className="btn btn-primary bottle-modal"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          {props.flavor}
        </button>
        <div className="keystone-divider">
          <img className="keystone" src={Keystone} alt="keystone divider" />
          <p className="keystone-text">{props.flavor}</p>
        </div>
        <hr className="bottle-divider"></hr>
        <hr id="bd-2" className="bottle-divider"></hr>
      </div>
      <BottleModal flavor={props.flavor} />
    </div>
  );
};

export default Bottle;
// exp: export default moduleName
