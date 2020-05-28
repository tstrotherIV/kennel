import React from "react";
import "./Park.css";

const ParkCard = (props) => {
  return (
    <div className="parkCard">
      <div className="parkCard-content">
        <picture>
          <img
            className="parkImage"
            src={require("./parkimg.png")}
            alt="Park_Image"
          />
        </picture>
        <h3>
          Park Name: <span className="card-parkName">{props.park.name}</span>
        </h3>
      </div>
      <button
        onClick={() => {
          props.deletePark(props.park.id);
        }}
        className="delete-btn"
      >
        Remove Park
      </button>
    </div>
  );
};

export default ParkCard;
