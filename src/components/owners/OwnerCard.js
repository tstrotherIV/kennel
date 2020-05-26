import React from "react";
import "./OwnerCard.css";

const OwnerCard = () => {
  return (
    <div className="ownerCard">
      <div className="ownerCard-content">
        <picture>
          <img className="ownerImage" src={require("./ownerimage.jpeg")} alt="Persons_Image" />
        </picture>
        <h3>
          Who: <span className="card-locationAddress">My name is The Real Slimshady</span>
        </h3>
      </div>
    </div>
  );
};

export default OwnerCard;