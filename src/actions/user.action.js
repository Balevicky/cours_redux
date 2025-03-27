// import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const GET_USERS = "GET_USERS";
export const ADD_USER_LIKE = "ADD_USER_LIKE";
export const getUsers = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/user").then((resp) => {
      dispatch({ type: GET_USERS, payload: resp.data[0] });
    });
  };
};
export const addUsertLike = (data) => {
  return (dispatch) => {
    return axios
      .put(`http://localhost:3000/user/${data.id}`, data)
      .then((resp) => {
        dispatch({ type: ADD_USER_LIKE, payload: data });
      });
  };
};
