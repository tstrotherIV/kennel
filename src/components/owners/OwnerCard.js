import React from "react";
import "./OwnerCard.css";
import { Link } from "react-router-dom";

const OwnerCard = (props) => {
  return (
    <div className="ownerCard">
      <div className="ownerCard-content">
        <picture>
          <img
            className="ownerImage"
            src={require("./ownerimage.jpeg")}
            alt="Persons_Image"
          />
        </picture>
        <h3>
          Who:{" "}
          <span className="card-locationAddress">
            {props.owner.firstName} {props.owner.lastName}
          </span>
        </h3>
      </div>
      <button
        onClick={() => {
          props.deleteOwner(props.owner.id);
        }}
        className="delete-btn"
      >
        Remove Owner
      </button>
      <Link to={`/owners/${props.owner.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default OwnerCard;
