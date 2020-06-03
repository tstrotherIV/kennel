import React, { useState, useEffect } from "react";
import EmployeeManager from "../../modules/EmployeeManager";
import AnimalCard from "../animal/AnimalCard";

const EmployeeWithAnimals = (props) => {
  const [employee, setEmployee] = useState({});
  const [animals, setAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    EmployeeManager.delete(props.employeeId).then(() =>
      props.history.push("/employees")
    );
  };

  useEffect(() => {
    //got here now make call to get employee with animal
    EmployeeManager.getWithAnimals(props.match.params.employeeId).then(
      (APIResult) => {
        setEmployee(APIResult);
        setAnimals(APIResult.animals);
        setIsLoading(false);
      }
    );
  }, [props.match.params.employeeId]);

  return (
    <div className="card">
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
            Employee Name:{" "}
            <span className="">
              {employee.firstName} {employee.lastName}
            </span>
            <br></br>
          </h3>
          <button type="button" disabled={isLoading} onClick={handleDelete}>
            Fire
          </button>
          <button
            type="button"
            onClick={() => props.history.push(`/employees/${employee.id}/edit`)}
          >
            Edit
          </button>
        </div>
      </div>
      <h3>
        Animals assigned to {employee.firstName} {employee.lastName}:{" "}
      </h3>
      {animals.map((animal) => (
        <AnimalCard key={animal.id} animal={animal} {...props} />
      ))}
    </div>
  );
};

export default EmployeeWithAnimals;
