import React, { useEffect, useState } from "react";
import ParkCard from "./ParkCard";
import ParkManager from "../../modules/ParkManager";

const ParkList = (props) => {
  const [parks, setParks] = useState([]);

  const getParks = () => {
    return ParkManager.getAll().then((parksFromAPI) => {
      // console.log(parksFromAPI);
      setParks(parksFromAPI);
    });
  };
  // Deletes Parks from API, then it will get all the parks again so we can THEN set the state of the parks
  const deletePark = (id) => {
    ParkManager.delete(id).then(() => ParkManager.getAll().then(setParks));
  };

  useEffect(() => {
    getParks();
  }, []);

  return (
    <>
      <section className="section-content">
        <button
          type="button"
          className="btn"
          onClick={() => {
            props.history.push("/parks/new");
          }}
        >
          Add Park
        </button>
      </section>
      <div className="container-cards">
        {parks.map((park) => (
          <ParkCard
            key={park.id}
            park={park}
            deletePark={deletePark}
            {...props}
          />
        ))}
      </div>
    </>
  );
};

export default ParkList;
