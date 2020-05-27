import React, { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import EmployeeManager from "../../modules/EmployeeManager";

const EmployeeList = (props) => {
  const [employees, setEmployees] = useState([]);

  const getEmployees = () => {
    return EmployeeManager.getAll().then((employeesFromAPI) => {
      console.log(employeesFromAPI);
      setEmployees(employeesFromAPI);
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);

  return (
    <div className="container-cards">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default EmployeeList;
