const initialState = [];

const TOGGLE_FILTER = "TOGGLE_FILTER";

export const toggleFilter = filter => {
  return {
    type: TOGGLE_FILTER,
    payload: filter
  };
};

const filterReducer = (state = initialState, action) => {
  const filterBy = action.payload;
  switch (action.type) {
    case TOGGLE_FILTER:
      if (!state.includes(filterBy)) {
        return [...state, filterBy];
      } else {
        let newState = state.filter(e => e !== filterBy);
        return newState;
      }
    default:
      return state;
  }
};

export default filterReducer;
