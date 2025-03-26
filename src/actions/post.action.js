// import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
export const GET_POSTS = "GET_POSTS";
export const ADD_POST = "ADD_POST";

export const getPosts = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/posts").then((resp) => {
      dispatch({ type: GET_POSTS, payload: resp.data });
    });
  };
};

export const addPost = (data) => {
  return (dispatch) => {
    return axios.post("http://localhost:3000/posts", data).then((resp) => {
      dispatch({ type: ADD_POST, payload: data });
    });
  };
};
