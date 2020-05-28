import React, { useState, useEffect } from "react";
import ParkManager from "../../modules/ParkManager";
import "./ParkDetail.css";

const ParkDetail = (props) => {
  const [park, setPark] = useState({ name: "", city: "" });

  useEffect(() => {
    ParkManager.get(props.parkId).then((park) => {
      setPark({
        name: park.name,
        city: park.city,
      });
    });
  }, [props.parkId]);

  return (
    <div className="parkCard">
      <div className="parkCard-content">
        <picture>
          <img
            className="parkImage"
            src={require("./parkimg.png")}
            alt="Park_Image"
          />
        </picture>
        <h3>
          Park Name: <span className="card-parkName">{park.name}</span>
        </h3>
      </div>
    </div>
  );
};

export default ParkDetail;
