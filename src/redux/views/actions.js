import { ADD_VIEW } from "./types";

export const addView = (number) => {
  return {
    type: ADD_VIEW,
    payload: Number(number), //  payload라는 건 관습적인 명명임, 숫자형태로 변환
    // reducer로 보내는 object안에 함꼐보내준다. payload 이용해서
  };
};
