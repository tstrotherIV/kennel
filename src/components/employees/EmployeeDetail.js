import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";

const EmployeeDetail = (props) => {
  const [employee, setEmployee] = useState({ name: "", status: "" });

  useEffect(() => {
    EmployeeManager.get(props.employeeId).then((employee) => {
      setEmployee({
        name: employee.name,
        status: employee.status,
      });
    });
  }, [props.employeeId]);

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
          Employee Name: <span className="">{employee.name}</span>
          <br></br>
          Employee Status: <span className="">{employee.status}</span>
        </h3>
      </div>
    </div>
  );
};

export default EmployeeDetail;
