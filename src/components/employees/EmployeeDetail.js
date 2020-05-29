import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import "./EmployeeDetail.css";

const EmployeeDetail = (props) => {
  const [employee, setEmployee] = useState({ name: "", status: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    EmployeeManager.delete(props.employeeId).then(() =>
      props.history.push("/employees")
    );
  };

  useEffect(() => {
    EmployeeManager.get(props.employeeId).then((employee) => {
      setEmployee({
        name: employee.name,
        status: employee.status,
      });
      setIsLoading(false);
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
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Fire
        </button>
      </div>
    </div>
  );
};

export default EmployeeDetail;
