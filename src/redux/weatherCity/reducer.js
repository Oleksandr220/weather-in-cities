const initialState = {
  request: '',
};

function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case 'FIND_CITY':
      return { request: action.data };
    default:
      return state;
  }
}

export default weatherReducer;
