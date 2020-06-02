import React from "react";
import "./LocationCard.css";
import { Link } from "react-router-dom";

const LocationCard = (props) => {
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
          Where: <span className="card-locationAddress">You are here!</span>
        </h3>
        <p>
          {props.location.city}, {props.location.state}
        </p>
      </div>
      <button
        onClick={() => {
          props.deleteLocation(props.location.id);
        }}
        className="delete-btn"
      >
        Close Location
      </button>
      <button
        type="button"
        onClick={() =>
          props.history.push(`/locations/${props.location.id}/edit`)
        }
      >
        Edit
      </button>
      <Link to={`/locations/${props.location.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default LocationCard;
