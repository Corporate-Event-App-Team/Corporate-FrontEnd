import * as types from "./actionTypes";
import axios from "axios";
// import { NotificationManager } from "react-notifications";
import axiosWithAuth from "../axios/axiosWithAuth";

export const getError = err => {
  return { type: types.GET_ERROR, payload: err };
};

export const onLogin = (userDetails, props) => dispatch => {
  axios
    .post(
      "https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/auth/login",
      userDetails
    )
    .then(res => {
      console.log("response from login endpoint", res);
      // NotificationManager.success(res.data.message, "Login successful!");
      dispatch({
        type: types.ON_LOGIN,
        payload: { token: res.data.token, username: userDetails.username }
      });
      props.history.push("/dashboard");
    })
    .catch(err => {
      console.log("response from login endpoint", err);
      // NotificationManager.error(err.message, "Something went terribly wrong");
      dispatch(getError(err.message));
    });
};

export const getUserError = err => {
  return { type: types.GET_USER_ERROR, payload: err };
};

export const getUser = props => dispatch => {
  axiosWithAuth()
    .get(
      "https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/users/"
    )
    .then(res => {
      console.log("response from users endpoint", res);
      const loggedUser = res.data.find(user => user.username === props);
      console.log("user who is logged in", props, loggedUser);
      dispatch({ type: types.GET_USER, payload: loggedUser });
    })
    .catch(err => {
      console.log("response from users endpoint", err);
      // NotificationManager.error(err.message, "Something went terribly wrong");
      dispatch(getUserError(err.message));
    });
};

export const showUserError = err => {
  return { type: types.SHOW_USER_ERROR, payload: err };
};

export const showUser = props => dispatch => {
  axiosWithAuth()
    .get(
      `https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/users/${props}/events`
    )
    .then(res => {
      console.log("response from user event endpoint", res);
      dispatch({ type: types.SHOW_USER, payload: res.data });
    })
    .catch(err => {
      console.log("response from users endpoint", err);
      // NotificationManager.error(err.message, "Something went terribly wrong");
      dispatch(getUserError(err.message));
    });
};

// export const addEvent = (event) => {
//   return {type: types.ADD_EVENT, payload: event}
// }

export const AddEventError = err => {
  return { type: types.ADD_EVENT_ERROR, payload: err };
};

export const AddEvent = (props, eventBody) => dispatch => {
  axiosWithAuth()
    .post(
      `https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/events`,
      {
        description: "Director Retirement",
        budget: "5000"
      }
    )
    .then(res => {
      console.log("response from add event endpoint", res);
      props.history.push("/dashboard");
      dispatch({ type: types.ADD_EVENT, payload: res.data });
    })
    .catch(err => {
      console.log("response from add endpoint", eventBody, err);
      // NotificationManager.error(err.message, "Something went terribly wrong");
      dispatch(getUserError(err.message));
    });
};
