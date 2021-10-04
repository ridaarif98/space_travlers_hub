const FETCH_ROCKETS = 'space_travlers_hub/rockets/FETCH_ROCKETS';
const initialState = [];

export const loadRockets = async (dispatch) => {
  const rocketGet = await fetch('https://api.spacexdata.com/v3/rockets');
  const rocketList = await rocketGet.json();
  const rocketsData = [];
  rocketList.map((rocket) => rocketsData.push({
    id: rocket.id,
    rocket_name: rocket.rocket_name,
    description: rocket.description,
    flickr_images: rocket.flickr_images,
  }));
  dispatch({
    type: FETCH_ROCKETS,
    payload: rocketsData,
  });
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default rocketsReducer;
