import React from 'react';
import './Activities.css';
import ActivitiesList from '../ActivitiesList/ActivitiesList';


function Activities() {
  return (
    <div className="Activities">
    <div className="Overlay">
    <h1>Activities</h1>
    </div>
    <ActivitiesList>
    </ActivitiesList>
    </div>
  );
}

export default Activities;
