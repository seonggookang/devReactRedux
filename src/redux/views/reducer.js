import { ADD_VIEW } from "./types";

const initialState = {
  count: 0,
};

// action 안에는 넘긴 type, payload가 있음
const viewsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIEW:
      return {
        ...state,
        count: state.count + action.payload, // 1이 아닌 넘겨받은 숫자를 기입
      };
    default:
      return state;
  }
};

export default viewsReducer;
