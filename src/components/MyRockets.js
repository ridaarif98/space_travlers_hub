import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRockets } from '../redux/rockets/rockets';
import '../stylesheets/rockets.css';

function MyRockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    dispatch(loadRockets);
  }, []);

  return (
    <div className="my-rockets">
      <h2>My Rockets</h2>
      <div className="rocket-div">
        <ul>
          {rockets.map((rocket) => (
            <li key={rocket.id}>
              <div class="img-rocket">
                <img src={rocket.flickr_images} alt="rcoket" />
              </div>
              <div className="rocket-detail">
                <h2> {rocket.rocket_name}</h2>
                <p>{rocket.description}</p>
                <button type="button" id={rocket.id}>
                  Reserve Rocket
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyRockets;
