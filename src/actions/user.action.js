// import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";

export const GET_USERS = "GET_USERS";
export const getUsers = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/user").then((resp) => {
      dispatch({ type: GET_USERS, payload: resp.data[0] });
    });
  };
};
