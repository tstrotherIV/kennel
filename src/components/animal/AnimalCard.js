import React from "react";
import "./AnimalCard.css";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture className="imgcontainer">
          <img className="dogimg" src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
      </div>
    </div>
  );
};

export default AnimalCard;
