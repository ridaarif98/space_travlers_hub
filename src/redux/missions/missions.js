const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case action.type:
      return action.payload;
    default:
      return state;
  }
};

export default missionsReducer;
