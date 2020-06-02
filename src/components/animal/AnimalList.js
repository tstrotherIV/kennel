import React, { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import AnimalManager from "../../modules/AnimalManager";

const AnimalList = (props) => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return AnimalManager.getAll().then((animalsFromAPI) => {
      setAnimals(animalsFromAPI);
    });
  };
  // Deletes animal from API, then it will get all the animals again so we can THEN set the state of the animals
  const deleteAnimal = (id) => {
    AnimalManager.delete(id).then(() =>
      AnimalManager.getAll().then(setAnimals)
    );
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/animals/new");
          }}
        >
          Admit Animal
        </button>
      </section>
      <div className="container-cards">
        {animals.map((animal) => (
          <AnimalCard
            key={animal.id}
            animal={animal}
            deleteAnimal={deleteAnimal}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default AnimalList;
