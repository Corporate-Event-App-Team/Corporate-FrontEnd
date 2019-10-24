import React, { useState } from "react";
import uuid from "uuid";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import "./App.css";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/DashBoard";
import * as actionCreators from "./state/actionCreators";
import AddEvents from "./components/AddEvents";
import Register from "./components/Register";
import ReactNotification from "react-notifications-component";
import Event from "./components/Event";
import useLocalStorage from "./components/useLocalStorage";

export function App(props) {
  const [storageEvent, setStorageEvent] = useLocalStorage("userEvents", []);
  const [addedEvent, setAddedEvent] = useLocalStorage("addedEvent", {});
  console.log("props from add event", props);
  const [eventBody, setEventBody] = useState({
    eventId: uuid(),
    eventName: "",
    description: "",
    date: "",
    time: "",
    client: "",
    todoList: [],
    vendors: [],
    pictures: "",
    budget: ""
  });

  return (
    <div className="App">
      <ReactNotification />
      <Route exact path="/" component={Login} />
      <Route path="/register" component={Register} />
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Route
        path="/dashboard/add-event"
        render={props => (
          <AddEvents 
          {...props}
            storageEvent={storageEvent}
            setStorageEvent={setStorageEvent}
            addedEvent={addedEvent}
            eventBody={eventBody}
            setEventBody={setEventBody}
            setAddedEvent={setAddedEvent}
          />
        )}
      />
      <Route
        path="/dashboard/event/:id"
        render={props => <Event {...props} eventBody={eventBody} setEventBody={setEventBody} setStorageEvent={setStorageEvent} />}
      />
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(App);
