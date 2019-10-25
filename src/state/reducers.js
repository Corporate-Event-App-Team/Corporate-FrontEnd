import * as types from "./actionTypes";

const initialToken = {
  token: "",
  username: ""
};

export const loginReducer = (state = initialToken, action) => {
  switch (action.type) {
    case types.ON_LOGIN:
      return {
        ...state,
        token: window.localStorage.setItem("token", action.payload.token),
        username: action.payload.username
      };
    default:
      return state;
  }
};

const initialEvent = {
  event: {}
};

export function addEventReducer(state = initialEvent, action) {
  switch (action.type) {
    case types.ADD_EVENT:
      return {
        ...state,
        event: action.payload
      };

    default:
      return state;
  }
}

const loggedInUser = {
  user: {}
};

export const userReducer = (state = loggedInUser, action) => {
  switch (action.type) {
    case types.GET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const userEvents = {
  events: [],
  setEvents: []
};

export const userEventsReducer = (state = userEvents, action) => {
  switch (action.type) {
    case types.SHOW_USER:
      return {
        ...state,
        events: [...state.events, action.payload]
      };

    case types.DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event !== action.payload)
      };

    default:
      return state;
  }
};

const initialEditingState = {
  editing: false,
  event: {}
};

export const editReducer = (state = initialEditingState, action) => {
  switch (action.type) {
    case types.EDIT_EVENT:
      return { ...state, editing: true };

    case types.SET_EVENT:
      return { ...state, event: action.payload };

    default:
      return state;
  }
};
