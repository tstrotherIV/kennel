import React, { useState } from "react";
import ParkManager from "../../modules/ParkManager";
import "./ParkForm.css";

const ParkForm = (props) => {
  const [park, setpark] = useState({ name: "", city: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...park };
    stateToChange[evt.target.id] = evt.target.value;
    setpark(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create park      object, invoke the ParkManager post method, and redirect to the full park list
   */
  const constructNewPark = (evt) => {
    evt.preventDefault();
    if (park.name === "" || park.city === "") {
      window.alert("Please input an park name and city");
    } else {
      setIsLoading(true);
      // Create the park and redirect user to park list
      ParkManager.post(park).then(() => props.history.push("/parks"));
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
              id="name"
              placeholder="park name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="city"
              placeholder="city"
            />
            <label htmlFor="city">city</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewPark}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ParkForm;
