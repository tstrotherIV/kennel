import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import locationManager from "../../modules/LocationManager";

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  const getAnimals = () => {
    return locationManager.getAll().then((locationsFromAPI) => {
      console.log(locationsFromAPI);
      setLocations(locationsFromAPI);
    });
  };

  const deleteLocation = (id) => {
    locationManager
      .delete(id)
      .then(() => locationManager.getAll().then(setLocations));
  };

  useEffect(() => {
    getAnimals();
  }, []);

  return (
    <div className="container-cards">
      {locations.map((location) => (
        <LocationCard
          key={location.id}
          location={location}
          deleteLocation={deleteLocation}
        />
      ))}
    </div>
  );
};

export default LocationList;
