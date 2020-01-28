import React from "react";
import "./Places.css";
import FetchRestaurent from "./FetchRestaurent";

function Places() {
  return (
    <React.Fragment>
      <div className="Places">
        <div className="Overlay">
          <h1>Places</h1>
        </div>
        <div>
          <h2 style={{ paddingLeft: "15px" }}>Place to eat</h2>
          <FetchRestaurent />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Places;
