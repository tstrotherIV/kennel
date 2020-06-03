import React, { useState, useEffect } from "react";
import LocationManager from "../../modules/LocationManager";
import EmployeeManager from "../../modules/EmployeeManager";
import "./LocationForm.css";

const LocationEditForm = (props) => {
  const [location, setLocation] = useState({ city: "", state: "" });
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getEmployees = () => {
    return EmployeeManager.getAll().then((employees) => {
      setEmployees(employees);
    });
  };

  const handleFieldChange = (evt) => {
    const stateToChange = { ...location };
    stateToChange[evt.target.id] = evt.target.value;
    setLocation(stateToChange);
  };

  const updateExistingLocation = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedLocation = {
      id: props.match.params.locationId,
      city: location.city,
      state: location.state,
      employeeId: location.employeeId,
    };

    LocationManager.update(editedLocation).then(() =>
      props.history.push("/locations")
    );
  };

  useEffect(() => {
    LocationManager.get(props.match.params.locationId).then((location) => {
      setLocation(location);
      setIsLoading(false);
    });
    getEmployees();
  }, [props.match.params.locationId]);

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
              id="city"
              value={location.city}
            />
            <label htmlFor="name">city</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="state"
              value={location.state}
            />
            <label htmlFor="state">state</label>
            <select
              className="form-control"
              id="employeeId"
              value={location.employeeId}
              onChange={handleFieldChange}
            >
              {employees.map((employee) => (
                <option key={employee.id} value={employee.id}>
                  {employee.firstName}
                </option>
              ))}
            </select>
            <label htmlFor="employeeId">Employee</label>
          </div>
          <div className="alignRight"></div>
          <button
            type="button"
            disabled={isLoading}
            onClick={updateExistingLocation}
            className="btn btn-primary"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default LocationEditForm;
