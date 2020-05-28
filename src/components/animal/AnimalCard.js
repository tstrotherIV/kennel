import React from "react";
import "./Animal.css";
import { Link } from "react-router-dom";

const AnimalCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <picture>
          <img src={require("./dog.svg")} alt="My Dog" />
        </picture>
        <h3>
          Name: <span className="card-petname">{props.animal.name}</span>
        </h3>
        <p>Breed: {props.animal.breed}</p>
      </div>
      <button
        onClick={() => {
          props.deleteAnimal(props.animal.id);
        }}
        className="delete-btn"
      >
        Release Animal
      </button>
      <Link to={`/animals/${props.animal.id}`}>
        <button>Details</button>
      </Link>
    </div>
  );
};

export default AnimalCard;
