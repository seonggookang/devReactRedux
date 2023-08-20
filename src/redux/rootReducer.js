import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";

const rootReducer = combineReducers({
  view: viewsReducer,
  subscribers: subscribersReducer,
});

export default rootReducer;
