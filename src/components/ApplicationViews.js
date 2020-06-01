import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
//only include these once they are built - previous practice exercise
import LocationList from "./locations/LocationList";
import EmployeeList from "./employees/EmployeeList";
import OwnerList from "./owners/OwnerList";
import ParkList from "./park/ParkList";
import AnimalDetail from "./animal/AnimalDetail";
import OwnerDetail from "./owners/OwnerDetail";
import EmployeeDetail from "./employees/EmployeeDetail";
import LocationDetail from "./locations/LocationDetail";
import ParkDetail from "./park/ParkDetail";
import AnimalForm from "./animal/AnimalForm";
import LocationForm from "./locations/LocationForm";
import EmployeeForm from "./employees/EmployeeForm";
import OwnerForm from "./owners/OwnerForm";
import ParkForm from "./park/ParkForm";

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
          return <AnimalList {...props} />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)"
        render={(props) => {
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/owners"
        render={(props) => {
          return <OwnerList {...props} />;
        }}
      />
      <Route
        path="/owners/:ownerId(\d+)"
        render={(props) => {
          return (
            <OwnerDetail
              ownerId={parseInt(props.match.params.ownerId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          return <EmployeeList {...props} />;
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)"
        render={(props) => {
          return (
            <EmployeeDetail
              employeeId={parseInt(props.match.params.employeeId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          return <LocationList {...props} />;
        }}
      />
      <Route
        path="/locations/:locationId(\d+)"
        render={(props) => {
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/parks"
        render={(props) => {
          return <ParkList {...props} />;
        }}
      />
      <Route
        path="/parks/:parkId(\d+)"
        render={(props) => {
          return (
            <ParkDetail
              parkId={parseInt(props.match.params.parkId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/animals/new"
        render={(props) => {
          return <AnimalForm {...props} />;
        }}
      />
      <Route
        path="/locations/new"
        render={(props) => {
          return <LocationForm {...props} />;
        }}
      />
      <Route
        path="/employees/new"
        render={(props) => {
          return <EmployeeForm {...props} />;
        }}
      />
      <Route
        path="/owners/new"
        render={(props) => {
          return <OwnerForm {...props} />;
        }}
      />
      <Route
        path="/parks/new"
        render={(props) => {
          return <ParkForm {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
