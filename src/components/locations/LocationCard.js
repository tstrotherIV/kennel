import React from "react";
import "./LocationCard.css";

const LocationCard = () => {
  return (
    <div className="locationCard">
      <div className="locationCard-content">
        <picture>
          <img
            className="locationPinImage"
            src={require("./pinPNG.png")}
            alt="My Location"
          />
        </picture>
        <h3>
          Where:{" "}
          <span className="card-locationAddress">Who Konws where we are</span>
        </h3>
        <p>Address: Keep Guessing</p>
      </div>
    </div>
  );
};

export default LocationCard;
