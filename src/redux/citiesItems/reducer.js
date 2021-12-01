const initialState = {
  cities: [],
};

function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_CITY':
      return { ...state, cities: [...state.cities, action.data] };
    case 'UPDATE_CITY':
      return { ...state, cities: [...action.data] };
    case 'REMOVE_CITY':
      return { ...state, cities: [...action.data] };
    default:
      return state;
  }
}

export default citiesReducer;
