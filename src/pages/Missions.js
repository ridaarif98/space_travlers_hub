import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchData,
  joinMission,
  leaveMission,
} from '../redux/missions/missions';

const Mission = () => {
  const data = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  const missions = Object.values(data);
  const handelMission = (mission) => {
    if (mission.joined) {
      dispatch(leaveMission(mission.mission_id));
    } else {
      dispatch(joinMission(mission.mission_id));
    }
  };
  const btnClass = (joined) => {
    let classes = 'btn btn-block btn-outline-';
    classes += joined ? 'danger' : 'dark';
    return classes;
  };
  const badgeClass = (joined) => {
    let classes = 'badge bg-';
    classes += joined ? 'info' : 'secondary';
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
            const btn = btnClass(mission.joined);
            const bdj = badgeClass(mission.joined);
            let memberStatus;
            let memberAction;
            if (mission.joined) {
              memberAction = 'Leave mission';
              memberStatus = 'Active member';
            } else {
              memberAction = 'Join mission';
              memberStatus = 'Not a member';
            }
            return (
              <tr key={mission.mission_id} className="pb-5">
                <td>{mission.mission_name}</td>
                <td className="pb-4">{mission.description}</td>
                <td>
                  <span className={bdj}>{memberStatus}</span>
                </td>
                <td>
                  <button
                    type="button"
                    className={btn}
                    onClick={() => handelMission(mission)}
                  >
                    {memberAction}
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
