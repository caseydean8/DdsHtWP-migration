import React from "react";
import spirit from "../assets/spirit.png";
import ryeDelivered from "../assets/rye-delivered.jpg";
import farmTo from "../assets/wheat-field-dh.jpeg";
import CarouselCard from "./CarouselCard";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={spirit} id="spirit" className="d-block car-img" alt="..." />
          <CarouselCard
            titleBold={"Spirit"}
            titleCursive={"of Tradition"}
            cardText={
              "Dad's Hat Rye taps into the Keystone State's agricultural richness to produce genuine rye right here in Bucks County."
            }
          />
        </div>
        <div className="carousel-item">
          <img
            src={ryeDelivered}
            id="rye-delivered"
            className="d-block car-img"
            alt="..."
          />
          <CarouselCard
            titleBold={"RYE"}
            titleCursive={"Delivered"}
            cardText={
              "Dad's Hat Rye taps into the Keystone State's agricultural richness to produce genuine rye right here in Bucks County."
            }
          />
        </div>
        <div className="carousel-item">
          <img src={farmTo} className="d-block car-img" alt="..." />
          <CarouselCard
            titleBold={"FARM"}
            titleCursive={"To Bottle"}
            cardText={
              "The process begins with rye grain grown by local farms - the most vital ingredient when making genuine rye whiskey."
            }
          />
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
  );
};

export default Carousel;
