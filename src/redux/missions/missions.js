const initialState = [];

const FETCH_DATA = 'spaceTravlers/missions/FETCH_DATA';

export const fetchData = () => async (dispatch) => {
  console.log('working');
  const response = await fetch('https://api.spacexdata.com/v3/missions');

  const data = await response.json();
  console.log(data);

  dispatch({
    type: FETCH_DATA,
    payload: data,
  });
};

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
