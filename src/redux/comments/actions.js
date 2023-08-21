import {
  FETCH_COMMENTS,
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
} from "./types";

export const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST,
  };
};
export const fetchCommentsSuccess = (comments) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    payload: comments,
  };
};
export const fetchCommentsFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    payload: error,
  };
};

export const fetchComments = () => {
  return (dispatch) => {
    dispatch(fetchCommentsRequest());
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((comments) => dispatch(fetchCommentsSuccess(comments)))
      .catch((error) => dispatch(fetchCommentsFailure(error))); // error 발생했을 때 케이스
  };
};
