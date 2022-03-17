import React from "react";
// imr: import React from 'react'
import BottleModal from "./BottleModal";
import "./Bottle.css";
// import Keystone from "../assets/keystone-divider.png";

function Bottle(props) {
  return (
    <div id={props.id} className="bottle">
      <img
        className="bottle-img"
        src={props.image}
        alt={`${props.flavor} whiskey bottle`}
        width="240"
        height="680"
      />

      {/* Below- bootstrap button */}
      <button
        type="button"
        className="btn bottle-modal d-sm-grid d-md-none"
        data-bs-toggle="modal"
        data-bs-target={`#${props.modalSelect}`}
      >
        {props.flavor}
      </button>

      {/* Below- keystone logo/button */}
      <button
        type="button"
        className="btn d-none d-md-grid keystone-divider"
        data-bs-toggle="modal"
        data-bs-target={`#${props.modalSelect}`}
      >
        {props.flavor}
      </button>

      <hr className="bottle-divider d-none d-md-grid"></hr>

      <hr id="bd-2" className="bottle-divider d-none d-md-grid"></hr>

      <BottleModal
        flavor={props.flavor}
        modalSelect={props.modalSelect}
        modalText={props.modalText}
        modalContent={props.modalContent}
      />
    </div>
  );
}

export default Bottle;
// exp: export default moduleName

// {/* <img
//   className="keystone-img"
//   src={Keystone}
//   alt="keystone divider"
//   width="137"
//   height="50"
// /> */}
