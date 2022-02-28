import React from "react";
import footerLogo from "../assets/white-logo.webp";

const BottleModal = (props) => {
  return (
    <div
      className="modal fade"
      id={props.modalSelect}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            {props.modalContent ? props.modalContent : <p>Webpage Here</p>}
          </div>
          <div className="modal-footer">
            <img
              className="modal-footer-logo"
              src={footerLogo}
              alt="Dad's Hat logo"
            />
            <button
              type="button"
              className="btn modal-footer-button"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottleModal;
