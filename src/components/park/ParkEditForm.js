import React, { useState, useEffect } from "react";
import ParkManager from "../../modules/ParkManager";
import "./ParkForm.css";

const ParkEditForm = (props) => {
  const [park, setPark] = useState({ name: "", city: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...park };
    stateToChange[evt.target.id] = evt.target.value;
    setPark(stateToChange);
  };

  const updateExistingpark = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedPark = {
      id: props.match.params.parkId,
      name: park.name,
      city: park.city,
    };

    ParkManager.update(editedPark).then(() => props.history.push("/parks"));
  };

  useEffect(() => {
    ParkManager.get(props.match.params.parkId).then((park) => {
      setPark(park);
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="name"
              value={park.name}
            />
            <label htmlFor="name">park name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="city"
              value={park.city}
            />
            <label htmlFor="city">city</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingpark}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default ParkEditForm;
