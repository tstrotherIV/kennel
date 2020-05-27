import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";
import OwnerList from "./owners/OwnerList";

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
        path="/animals"
        render={(props) => {
          return <AnimalList />;
        }}
      />
      <Route
        path="/owners"
        render={(props) => {
          return <OwnerList />;
        }}
      />
      <Route
        path="/employees"
        render={(props) => {
          return <EmployeeList />;
        }}
      />
      <Route
        path="/locations"
        render={(props) => {
          return <LocationList />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
