const initialState = [];
const JOIN_MISSION = 'spaceTravlers/missions/JOIN_Mission';
const FETCH_DATA = 'spaceTravlers/missions/FETCH_DATA';

export const fetchData = () => async (dispatch) => {
  const response = await fetch('https://api.spacexdata.com/v3/missions');

  const data = await response.json();

  dispatch({
    type: FETCH_DATA,
    payload: [...data],
  });
};

export const joinMissionAction = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    case JOIN_MISSION: {
      const newState = state.map((mission) => {
        if (mission.mission_id === action.payload) {
          return { ...mission, joined: true };
        }
        return mission;
      });
      return newState;
    }
    default:
      return state;
  }
};

export default missionsReducer;
