// reducer에서도 이 타입을 통해 핸들링 해야하기 때문에 상수화 시켜 사용하는게 좋다
// 아래 2개 상수를 리듀서에서도 사용해야 하기 때문에 따로 파일을 만들어 관리 해준다.
// const ADD_SUBSCRIBER = "ADD_SUBSCRIBER";
// const REMOVE_SUBSCRIBER = "REMOVE_SUBSCRIBER";
import { ADD_SUBSCRIBER, REMOVE_SUBSCRIBER } from "./types";

export const addSubscriber = () => {
  return {
    type: ADD_SUBSCRIBER,
  };
};

export const removerSubscriber = () => {
  return {
    type: REMOVE_SUBSCRIBER,
  };
};
