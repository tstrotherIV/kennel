import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import Login from "./auth/Login";
import AnimalList from "./animal/AnimalList";
import AnimalEditForm from "./animal/AnimalEditForm";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import LocationList from "./locations/LocationList";
import LocationDetail from "./locations/LocationDetail";
import LocationEditForm from "./locations/LocationEditForm";
import LocationForm from "./locations/LocationForm";
import EmployeeList from "./employees/EmployeeList";
import EmployeeForm from "./employees/EmployeeForm";
import EmployeeEditForm from "./employees/EmployeeEditForm";
import EmployeeWithAnimals from "./employees/EmployeeWithAnimals";
import EmployeeDetail from "./employees/EmployeeDetail";
import OwnerForm from "./owners/OwnerForm";
import OwnerDetail from "./owners/OwnerDetail";
import OwnerList from "./owners/OwnerList";
import OwnerEditForm from "./owners/OwnerEditForm";
import ParkList from "./park/ParkList";
import ParkDetail from "./park/ParkDetail";
import ParkEditForm from "./park/ParkEditForm";
import ParkForm from "./park/ParkForm";

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

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
          if (hasUser) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
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
        path="/animals/new"
        render={(props) => {
          return <AnimalForm {...props} />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/owners"
        render={(props) => {
          if (hasUser) {
            return <OwnerList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
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
        path="/owners/new"
        render={(props) => {
          return <OwnerForm {...props} />;
        }}
      />
      <Route
        path="/owners/:ownerId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <OwnerEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          if (hasUser) {
            return <EmployeeList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
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
        path="/employees/:employeeId(\d+)/details"
        render={(props) => {
          return <EmployeeWithAnimals {...props} />;
        }}
      />
      <Route
        path="/employees/new"
        render={(props) => {
          return <EmployeeForm {...props} />;
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <EmployeeEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          if (hasUser) {
            return <LocationList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
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
        path="/locations/new"
        render={(props) => {
          return <LocationForm {...props} />;
        }}
      />
      <Route
        path="/locations/:locationId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/parks/new"
        render={(props) => {
          return <ParkForm {...props} />;
        }}
      />
      <Route
        exact
        path="/parks"
        render={(props) => {
          if (hasUser) {
            return <ParkList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
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
        path="/parks/:parkId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <ParkEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/parks/:parkId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <ParkEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/login"
        render={(props) => {
          return <Login setUser={setUser} {...props} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
