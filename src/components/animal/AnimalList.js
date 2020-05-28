import React, { useEffect, useState } from "react";
import AnimalCard from "./AnimalCard";
import AnimalManager from "../../modules/AnimalManager";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  const getAnimals = () => {
    return AnimalManager.getAll().then((animalsFromAPI) => {
      console.log(animalsFromAPI);
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
    <div className="container-cards">
      {animals.map((animal) => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          deleteAnimal={deleteAnimal}
        />
      ))}
    </div>
  );
};

export default AnimalList;
