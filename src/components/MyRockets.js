import React,  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadRockets } from '../redux/rockets/rockets';

function MyRockets() {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rocketsReducer);

  useEffect(() => {
      dispatch(loadRockets);
  },[]);

  return (
    <div className="my-rockets">
      <h2>My Rockets</h2>
      <div className="div">
        <ul>
          {rockets.map((rocket) => (
            <li>
             <span> {rocket.id} {rocket.rocket_name}</span> 
             <p>{rocket.description}</p>
             <img src={rocket.flickr_images} alt="rcoket"/>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyRockets;
