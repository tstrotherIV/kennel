import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = (props) => {
  const [location, setLocation] = useState({ city: "", state: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    LocationManager.delete(props.locationId).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    LocationManager.get(props.locationId).then((location) => {
      setLocation({
        city: location.city,
        state: location.state,
      });
      setIsLoading(false);
    });
  }, [props.locationId]);

  return (
    <div className="locationCard">
      <div className="locationCard-content">
        <picture>
          <img
            className="locationPinImage"
            src={require("./pinPNG.png")}
            alt="My Location"
          />
        </picture>
        <h3>
          Where: <span className="card-locationAddress">You are here!</span>
        </h3>
        <p>
          {location.city}, {location.state}
        </p>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close
        </button>
      </div>
    </div>
  );
};

export default LocationDetail;
