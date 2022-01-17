const INITIAL_STATE = {
    resumes:[]
};
 const resumeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case "UPDATE_DETAILS":
          state.resumes.push(action.payload)
          return state;
    default:
      return state;
  }
};

export default resumeReducer;
