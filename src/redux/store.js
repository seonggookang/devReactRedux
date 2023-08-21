// actions 다른 파일에

// reducer 다른 파일에

// store 여기에

import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [logger, thunk]; // 미들웨어가 여러개가 될 수 있으므로 이처럼 한다

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
); // store 생성 >> 리듀서를 인자로 넣음

// 외부에서 사용할 수 있도록
export default store;
