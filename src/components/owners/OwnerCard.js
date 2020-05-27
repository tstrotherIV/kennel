import React from "react";
import "./OwnerCard.css";

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
    </div>
  );
};

export default OwnerCard;
