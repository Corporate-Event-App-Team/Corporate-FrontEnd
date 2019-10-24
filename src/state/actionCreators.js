import * as types from "./actionTypes";
import axios from "axios";
import axiosWithAuth from "../axios/axiosWithAuth";
import { store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";

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
      store.addNotification({
        title: "Login successful!",
        message: res.data.message,
        type: "success", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
      dispatch({
        type: types.ON_LOGIN,
        payload: { token: res.data.token, username: userDetails.username }
      });
      props.history.push("/dashboard");
    })
    .catch(err => {
      console.log("response from login endpoint", err);
      store.addNotification({
        title: "Something went terribly wrong",
        message: err.message,
        type: "danger", // 'default', 'success', 'info', 'warning'
        container: "top-right", // where to position the notifications
        animationIn: ["animated", "fadeIn"], // animate.css classes that's applied
        animationOut: ["animated", "fadeOut"], // animate.css classes that's applied
        dismiss: {
          duration: 3000
        }
      });
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
      dispatch(getUserError(err.message));
    });
};

export const showUserError = err => {
  return { type: types.SHOW_USER_ERROR, payload: err };
};

export const showUser = props => {
  return { type: types.SHOW_USER, payload: props };
  //   axiosWithAuth()
  //     .get(
  //       `https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/users/${props}/events`
  //     )
  //     .then(res => {
  //       console.log("response from user event endpoint", res);
  //     })
  //     .catch(err => {
  //       console.log("response from users endpoint", err);
  //       dispatch(getUserError(err.message));
  //     });
};

export const AddEventError = err => {
  return { type: types.ADD_EVENT_ERROR, payload: err };
};

export const AddEvent = (props, eventBody) => {
  props.history.push("/dashboard");
  return { type: types.ADD_EVENT, payload: eventBody };
  //   axiosWithAuth()
  //     .post(
  //       `https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/events`,
  //       {
  //         description: "Director Retirement",
  //         budget: "5000"
  //       }
  //     )
  //     .then(res => {
  //       console.log("response from add event endpoint", res);

  //     })
  //     .catch(err => {
  //       console.log("response from add endpoint", eventBody, err);
  //       dispatch(getUserError(err.message));
  //     });
};

export const deleteEvent = (props, event, setStorageEvent) => {
  let userEvents = JSON.parse(window.localStorage.getItem("userEvents"));
  let nonDeletedevents = userEvents.filter(
    foundEvent => foundEvent.eventId !== event.eventId
  );
  setStorageEvent(nonDeletedevents);
  props.history.replace("/dashboard");
  return { type: types.DELETE_EVENT, payload: event };
};

export const editEvent = (props, event, setEventBody,setStorageEvent) => {
  props.history.replace("/dashboard/add-event");
  setEventBody(event);
  return { type: types.EDIT_EVENT };
};

export const setEvent = event => {
  return { type: types.SET_EVENT, payload: event };
};
