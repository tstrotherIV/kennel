import { Route, Redirect } from "react-router-dom";
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
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationEditForm from "./locations/LocationEditForm";
import EmployeeEditForm from "./employees/EmployeeEditForm";
import OwnerEditForm from "./owners/OwnerEditForm";
import ParkEditForm from "./park/ParkEditForm";
import Login from "./auth/Login";

const ApplicationViews = () => {
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
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
          if (isAuthenticated()) {
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
        exact
        path="/owners"
        render={(props) => {
          if (isAuthenticated()) {
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
        exact
        path="/employees"
        render={(props) => {
          if (isAuthenticated()) {
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
        exact
        path="/locations"
        render={(props) => {
          if (isAuthenticated()) {
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
        exact
        path="/parks"
        render={(props) => {
          if (isAuthenticated()) {
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
      <Route path="/login" component={Login} />
      <Route
        path="/animals/:animalId(\d+)/edit"
        render={(props) => {
          if (isAuthenticated()) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/locations/:locationId(\d+)/edit"
        render={(props) => {
          if (isAuthenticated()) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)/edit"
        render={(props) => {
          if (isAuthenticated()) {
            return <EmployeeEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/owners/:ownerId(\d+)/edit"
        render={(props) => {
          if (isAuthenticated()) {
            return <OwnerEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/parks/:parkId(\d+)/edit"
        render={(props) => {
          if (isAuthenticated()) {
            return <ParkEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
