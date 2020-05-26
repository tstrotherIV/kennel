import React from "react";
import "./AnimalCard.css";

const AnimalCard = () => {
  return (
    <div className="card">
      <div className="card-content">
        <picture class="imgcontainer">
          <img class="dogimg" src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">Doodles</span>
        </h3>
        <p>Breed: Poodle</p>
      </div>
      <div className="card-content">
        <picture class="imgcontainer">
          <img class="dogimg" src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">Sparky</span>
        </h3>
        <p>Breed: Still Guessing</p>
      </div>
    </div>
  );
};

export default AnimalCard;
