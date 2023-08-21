import { combineReducers } from "redux";
import subscribersReducer from "./subscribers/reducer";
import viewsReducer from "./views/reducer";
import commentsReducer from "./comments/reducer";

const rootReducer = combineReducers({
  view: viewsReducer,
  subscribers: subscribersReducer,
  comments: commentsReducer,
});

export default rootReducer;
