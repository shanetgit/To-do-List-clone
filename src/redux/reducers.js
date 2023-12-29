// reducers.js
const initialState = {
    searchResults: [],
    // Add other state properties as needed
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_SEARCH_RESULTS':
        return {
          ...state,
          searchResults: action.payload,
        };
      // Add other cases as needed
      default:
        return state;
    }
  };
  
  export default rootReducer;