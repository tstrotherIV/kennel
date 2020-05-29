import React, { useState, useEffect } from "react";
import ParkManager from "../../modules/ParkManager";
import "./ParkDetail.css";

const ParkDetail = (props) => {
  const [park, setPark] = useState({ name: "", city: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    ParkManager.delete(props.parkId).then(() => props.history.push("/parks"));
  };

  useEffect(() => {
    ParkManager.get(props.parkId).then((park) => {
      setPark({
        name: park.name,
        city: park.city,
      });
      setIsLoading(false);
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
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ParkDetail;
