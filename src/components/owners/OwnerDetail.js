import React, { useState, useEffect } from "react";
import OwnerManager from "../../modules/OwnerManager";
import "./OwnerDetail.css";

const OwnerDetail = (props) => {
  const [owner, setOwner] = useState({ firstName: "", lastName: "" });
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = () => {
    setIsLoading(true);
    OwnerManager.delete(props.ownerId).then(() =>
      props.history.push("/owners")
    );
  };

  useEffect(() => {
    OwnerManager.get(props.ownerId).then((owner) => {
      setOwner({
        firstName: owner.firstName,
        lastName: owner.lastName,
      });
      setIsLoading(false);
    });
  }, [props.ownerId]);

  return (
    <div className="ownerCard">
      <div className="ownerCard-content">
        <picture>
          <img
            className="ownerImage"
            src={require("./ownerimage.jpeg")}
            alt="Persons_Image"
          />
        </picture>
        <h3>
          Who:{" "}
          <span className="card-locationAddress">
            {owner.firstName} {owner.lastName}
          </span>
        </h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Discharge
        </button>
      </div>
    </div>
  );
};

export default OwnerDetail;
