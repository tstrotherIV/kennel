import React from "react";
import "./ParkCard.css";
import { Link } from "react-router-dom";

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
          Park Name:{" "}
          <span className="card-parkName">
            {props.park.name} in {props.park.city}
          </span>
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
      <button
        type="button"
        onClick={() => props.history.push(`/parks/${props.park.id}/edit`)}
      >
        Edit
      </button>
      <Link to={`/parks/${props.park.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default ParkCard;
