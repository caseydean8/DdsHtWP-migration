import React from "react";

const CarouselCard = (props) => {
  return (
    <div className="carousel-caption">
      <div id="bold">{props.titleBold}</div>
      <div className="cursive">{props.titleCursive}</div>
      <hr className="red-break"></hr>
      <div className="card-text">
        <p>{props.cardText}</p>
      </div>
    </div>
  );
};

export default CarouselCard;
