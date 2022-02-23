import React from "react";
// imr: import React from 'react'
import Keystone from "../assets/keystone-divider.png";
import BottleModal from "./BottleModal";

function Bottle(props) {
  console.log(props, "props at Bottle");
  return (
    <div className="modal-wrapper">
      <div className="bottle-wrapper">
        <div className="bottle">
          <img className="bottle-img" src={props.image} alt={props.alt} />
        </div>
       
       {/* Below- bootstrap button */}
        <button
          type="button"
          className="btn btn-light bottle-modal"
          data-bs-toggle="modal"
          data-bs-target={`#${props.modalSelect}`}
        >
          {props.flavor}
        </button>
       
        {/* Below- keystone logo/button */}
        {/* <div
          className="keystone-divider"
          type="button"
          data-bs-toggle="modal"
          data-bs-target={`#${props.modalSelect}`}
        >
          <img className="keystone" src={Keystone} alt="keystone divider" />
          <p className="keystone-text">{props.flavor}</p>
        </div> */}
        
        {/* <hr className="bottle-divider"></hr>
        <hr id="bd-2" className="bottle-divider"></hr> */}

        <BottleModal
          flavor={props.flavor}
          modalSelect={props.modalSelect}
          modalText={props.modalText}
        />
      </div>
    </div>
  );
}

export default Bottle;
// exp: export default moduleName
