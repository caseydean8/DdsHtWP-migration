import React from "react";
import spirit from "../assets/spirit.png";
import ryeDelivered from "../assets/rye-delivered.jpg";
import farmTo from "../assets/farm-to-bottle.jpg";

const Carousel = () => {
  return (
    // <div className="row">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={spirit} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ryeDelivered} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={farmTo} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    // {/* </div> */}
  );
};

export default Carousel;
