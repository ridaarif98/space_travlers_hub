import React from 'react';
import { useSelector } from 'react-redux';

function MyRockets() {
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <div className="my-rockets">
      <h2>My Rockets</h2>
      <div className="div">
        <p> {rockets.filter((y) => y.reserved).map((y) => y.rocket_name)} </p>
      </div>
    </div>
  );
}

export default MyRockets;
