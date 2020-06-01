import React, { useState } from "react";
import LocationManager from "../../modules/LocationManager";
import "./LocationForm.css";

const LocationForm = (props) => {
  const [location, setLocation] = useState({ city: "", state: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create location      object, invoke the AnimalManager post method, and redirect to the full location list
   */
  const constructNewLocation = (evt) => {
    evt.preventDefault();
    if (location.city === "" || location.state === "") {
      window.alert("Please input a location city and state");
    } else {
      setIsLoading(true);
      // Create the location and redirect user to location list
      LocationManager.post(location).then(() =>
        props.history.push("/locations")
      );
    }
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="city"
              placeholder="location city"
            />
            <label htmlFor="city">city</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="state"
              placeholder="state"
            />
            <label htmlFor="state">state</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewLocation}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default LocationForm;
