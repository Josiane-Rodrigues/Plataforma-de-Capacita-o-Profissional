const initialState = {
    user: null,
    courses: [],
    jobs: []
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      case 'SET_COURSES':
        return { ...state, courses: action.payload };
      case 'SET_JOBS':
        return { ...state, jobs: action.payload };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  