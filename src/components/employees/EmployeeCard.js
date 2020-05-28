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
          Employee Name: <span className="">{props.employee.name}</span>
          <br></br>
          Employee Status: <span className="">{props.employee.status}</span>
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
    </div>
  );
};

export default EmployeeCard;
