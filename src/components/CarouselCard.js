import React from "react";

const CarouselCard = (props) => {
  return (
    <div className="carousel-caption d-md-block">
      <div id="bold">
        <h1>{props.titleBold}</h1>
      </div>
      <div className="cursive">
        <h1>{props.titleCursive}</h1>
      </div>
      <hr className="red-break"></hr>
      <div className="card-text">
        <p>{props.cardText}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
