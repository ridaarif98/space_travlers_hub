import { React } from 'react';
import { useSelector } from 'react-redux';

function MyMissions() {
  const missions = useSelector((state) => state.missionsReducer);
  return (
    <div className="my-missions">
      <h2>My Missions</h2>
      <ul className="div list-group">
        {missions.map((mission) => {
          if (mission.joined) {
            return (
              <li key={mission.mission_name} className="list-group-item">
                {mission.mission_name}
              </li>
            );
          }
          return '';
        })}
      </ul>
    </div>
  );
}

export default MyMissions;
