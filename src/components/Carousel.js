import React from "react";
import spirit from "../assets/spirit.png";
import ryeDelivered from "../assets/rye-delivered.jpg";
import farmTo from "../assets/wheat-field-dh.jpeg";
import farmToBig from "../assets/farm-to-bottle.jpg";
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
          <img
            src={spirit}
            id="spirit"
            className="d-block car-img"
            alt="..."
            width="1057.77"
            height="544"
          />
          {/* width=1400 height=720 */}
          <CarouselCard
            titleBold={"SPIRIT"}
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
            width="1400"
            height="720"
          />
          <CarouselCard
            titleBold={"RYE"}
            titleCursive={"Delivered"}
            cardText={
              "Dad's Hat is real rye whiskey made the right way. Now Pennsylvania residents can order online for direct delivery"
            }
          />
        </div>
        <div className="carousel-item">
          <img
            id="farm-to-mobile"
            src={farmTo}
            className="car-img"
            alt="..."
            width="527"
            height="626"
          />
          <img
            id="farm-to-big"
            src={farmToBig}
            className="car-img"
            alt="..."
            width="1400"
            height="720"
          />
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
