import React from "react";
import spirit from "../assets/spirit.png";
import ryeDelivered from "../assets/rye-delivered.jpg";
import farmTo from "../assets/wheat-field-dh.jpeg";
// import CarouselCard from "./CarouselCard";

const Carousel = () => {
  return (
    // <div className="row">
    <div
      id="carouselExampleControls"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={spirit} id="spirit" className="d-block car-img" alt="..." />
          {/* <CarouselCard buttonText={"Spirit of Tradition"} /> */}
          <div className="carousel-caption d-md-block">
            <div className="bold">
              <h1>SPIRIT</h1>
            </div>
            <div className="cursive">
              <h1>of Tradition</h1>
            </div>
            <p>
              Dad's Hat Rye taps into the Keystone State's agricultural richness
              to produce genuine rye right here in Bucks County.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={ryeDelivered}
            id="rye-delivered"
            className="d-block car-img"
            alt="..."
          />
          {/* <CarouselCard buttonText={"Rye Delivered"} /> */}
          <div className="carousel-caption d-md-block r-d-label">
            <div className="bold">
              <h1>Rye</h1>
            </div>
            <div className="cursive">
              <h1>Delivered</h1>
            </div>
            <p>
              Dad's Hat is real rye whiskey made the right way. Now Pennsylvania
              residents can order online for direct delivery
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={farmTo} className="d-block car-img" alt="..." />
          {/* <CarouselCard buttonText={"Farm To Bottle"} /> */}
          <div className="carousel-caption d-md-block r-d-label">
            <div className="bold">
              <h1>FARM</h1>
            </div>
            <div className="cursive">
              <h1>To Bottle</h1>
            </div>
            <p>The process begins with rye grain grown by local farms - the most vital ingredient when making genuine rye whiskey</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
    // </div>
  );
};

export default Carousel;
