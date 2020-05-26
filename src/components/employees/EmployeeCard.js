import React from "react";
import "./EmployeeCard.css";

const EmployeeCard = () => {
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
          Who:{" "}
          <span className="card-locationAddress">
            I still don't know who I am
          </span>
        </h3>
      </div>
      <div className="employeeCard-content">
        <picture>
          <img
            className="employeeImage"
            src={require("./empimg.png")}
            alt="Employee_Image"
          />
        </picture>
        <h3>
          Name: <span className="card-locationAddress">Mr. Awesome</span>
        </h3>
      </div>
    </div>
  );
};

export default EmployeeCard;
