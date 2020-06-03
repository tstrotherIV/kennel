import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = (props) => {
  return (
    <div className="employeeCard">
      <div className="employeeCard-content">
        <picture>
          <img
            className="employeeImage"
            src={require("./empimg.png")}
            alt="Employee_Image"
          />
        </picture>
        <h3>
          First Name: <span className="">{props.employee.firstName}</span>
          <br></br>
          Last Name: <span className="">{props.employee.lastName}</span>
        </h3>
      </div>
      <button
        onClick={() => {
          props.deleteEmployee(props.employee.id);
        }}
        className="delete-btn"
      >
        Fire Employee
      </button>
      <button
        type="button"
        onClick={() => {
          props.history.push(`/employees/${props.employee.id}/details`);
        }}
      >
        Details
      </button>
    </div>
  );
};

export default EmployeeCard;
