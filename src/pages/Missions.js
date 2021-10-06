import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, joinMissionAction } from '../redux/missions/missions';

const Mission = () => {
  const data = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const missions = Object.values(data);
  const joinMission = (id) => {
    dispatch(joinMissionAction(id));
  };
  const classes = (joined) => {
    let classes = 'btn btn-block btn-outline-';
    classes += joined ? 'danger' : 'dark';
    return classes;
  };

  return (
    <div className="container">
      <table className="table table-bordered table-striped">
        <thead>
          <tr>
            <th scope="col">Mission</th>
            <th scope="col">Description</th>
            <th scope="col">Status</th>
            <th scope="col">{}</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => {
            const stringd = classes(mission.joined);
            return (
              <tr key={mission.mission_id} className="pb-5">
                <td>{mission.mission_name}</td>
                <td className="pb-4">{mission.description}</td>
                <td>
                  <span className="badge bg-secondary">Not a member</span>
                </td>
                <td>
                  <button
                    type="button"
                    className={stringd}
                    onClick={() => joinMission(mission.mission_id)}
                  >
                    Join Mission
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Mission;
