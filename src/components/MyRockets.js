import React from 'react';
import { useSelector } from 'react-redux';

function MyRockets() {
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <div className="my-missions">
      <h2>My Missions</h2>
      <ul className="div list-group">
        {rockets
          .filter((y) => y.reserved)
          .map((y) => (
            <li key={y.rocket_name} className="list-group-item">
              {y.rocket_name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default MyRockets;
