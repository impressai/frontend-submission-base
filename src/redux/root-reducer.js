import { combineReducers } from "redux";
import resumeReducer from "./resume/resume.reducer";

const rootReducer = combineReducers({
  resume: resumeReducer
});

export default rootReducer;
