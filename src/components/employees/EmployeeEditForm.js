import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";

const EmployeeEditForm = (props) => {
  const [employee, setEmployee] = useState({ firstName: "", lastName: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setEmployee(stateToChange);
  };

  const updateExistingEmployee = (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    // This is an edit, so we need the id
    const editedEmployee = {
      id: props.match.params.employeeId,
      firstName: employee.firstName,
      lastName: employee.lastName,
    };

    EmployeeManager.update(editedEmployee).then(() =>
      props.history.push(`/employees/${employee.id}/details`)
    );
  };

  useEffect(() => {
    EmployeeManager.get(props.match.params.employeeId).then((employee) => {
      setEmployee(employee);
      setIsLoading(false);
    });
  }, [props.match.params.employeeId]);

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
              id="fistName"
              value={employee.firstName}
            />
            <label htmlFor="firstName">employee first name</label>

            <input
              type="text"
              required
              className="form-control"
              onChange={handleFieldChange}
              id="lastName"
              value={employee.lastName}
            />
            <label htmlFor="lastName">employee last name</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingEmployee}
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

export default EmployeeEditForm;
