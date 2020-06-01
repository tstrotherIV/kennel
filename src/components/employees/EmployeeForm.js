import React, { useState } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeForm.css";

const EmployeeForm = (props) => {
  const [employee, setemployee] = useState({ name: "", status: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...employee };
    stateToChange[evt.target.id] = evt.target.value;
    setemployee(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create employee      object, invoke the EmployeeManager post method, and redirect to the full employee list
   */
  const constructNewEmployee = (evt) => {
    evt.preventDefault();
    if (employee.name === "" || employee.status === "") {
      window.alert("Please input an employee name and status");
    } else {
      setIsLoading(true);
      // Create the employee and redirect user to employee list
      EmployeeManager.post(employee).then(() =>
        props.history.push("/employees")
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
              id="name"
              placeholder="employee name"
            />
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              onChange={handleFieldChange}
              id="status"
              placeholder="status"
            />
            <label htmlFor="status">status</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewEmployee}
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default EmployeeForm;
