import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalCard from "./animal/AnimalCard";
//only include these once they are built - previous practice exercise
import LocationCard from "./locations/LocationCard";
import EmployeeCard from "./employees/EmployeeCard";
import OwnerCard from "./owners/OwnerCard";

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={(props) => {
          return <AnimalCard />;
        }}
      />
      <Route
        exact
        path="/owners"
        render={(props) => {
          return <OwnerCard />;
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          return <EmployeeCard />;
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          return <LocationCard />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
