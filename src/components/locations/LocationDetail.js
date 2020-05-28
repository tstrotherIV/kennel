import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationDetail.css";

const LocationDetail = (props) => {
  const [location, setLocation] = useState({ city: "", state: "" });

  useEffect(() => {
    LocationManager.get(props.locationId).then((location) => {
      setLocation({
        city: location.city,
        state: location.state,
      });
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
      </div>
    </div>
  );
};

export default LocationDetail;
