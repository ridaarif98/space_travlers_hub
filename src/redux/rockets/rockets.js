const FETCH_ROCKETS = 'space_travlers_hub/rockets/FETCH_ROCKETS';
const RESERVE_ROCKET = 'space_travlers_hub/rockets/RESERVE_ROCKET';
const CANCEL_RESERVATION = 'space_travlers_hub/rockets/CANCEL_RESERVATION';

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

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKET,
  id,
});

export const cancelRocketReservation = (id) => ({
  type: CANCEL_RESERVATION,
  id,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROCKETS:
      return [...action.payload];
    case RESERVE_ROCKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    case CANCEL_RESERVATION:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

export default rocketsReducer;
