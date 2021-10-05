import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRockets, reserveRocket, cancelRocketReservation } from '../redux/rockets/rockets';
import '../stylesheets/rockets.css';

const Rocket = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
    dispatch(loadRockets);
  }, []);

  return (
    <div className="my-rockets">
      <div className="rocket-div">
        <ul>
          {rockets.map((rocket) => (
            <li key={rocket.id}>
              <div className="img-rocket">
                <img src={rocket.flickr_images} alt="rcoket" />
              </div>
              <div className="rocket-detail">
                <h2>{rocket.rocket_name}</h2>
                <p>{rocket.description}</p>
              
                {rocket.reserved
                ?
                <button type="button" className="cancelBtn" id={rocket.id} onClick= {() => dispatch(cancelRocketReservation(rocket.id))}>
                Cancel Reservation
                </button>
                :
                <button type="button" className="reserveBtn" id={rocket.id} onClick= {() => dispatch(reserveRocket(rocket.id))}>
                Reserve Rocket
              </button>
              }
  
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Rocket;
