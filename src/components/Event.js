import React, { useState} from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import AddEvents from "./AddEvents";

export function Event(props) {
  let userEvents = JSON.parse(window.localStorage.getItem("userEvents"));
  let event = userEvents.find(event => event.eventId === props.match.params.id);
  let eventTodolist = event.todoList.split(",");
  let eventVendors = event.vendors.split(",");

  console.log(
    "props from event =====>",
    props,
    userEvents,
    event,
    eventTodolist,
    eventVendors
  );
  const { editEvent, deleteEvent,setEventBody, eventBody, setStorageEvent, editing } = props;
  return (
    <div style={{ color: "white" }}>
      Hello from Individual event!
      {!editing && (
        <div>
          <img src={event.pictures} alt="event-logo" />
          <p>Name of Event: {event.eventName}</p>
          <p>Description: {event.description} </p>
          <p>Name of Client: {event.client} </p>
          <p>Date: {event.date} </p>
          <p>Time: {event.time} </p>
          <p>Budget: {event.budget} </p>

          <div>
            <h5>Todo list</h5>
            {eventTodolist.map((todo, indx) => (
              <Todo todo={todo} key={indx} indx={indx} />
            ))}
          </div>

          <div>
            <h5>Vendors</h5>{" "}
            {eventVendors.map((vendor, indx) => (
              <div key={indx}>
                <h6>
                  {indx + 1}. {vendor}{" "}
                </h6>{" "}
              </div>
            ))}
          </div>

          <div>
            <button onClick={() => editEvent(props, event,setEventBody, setStorageEvent)}>Edit</button>
            <button onClick={() => deleteEvent(props, event, setStorageEvent)}>Delete</button>
          </div>
        </div>
      )}
      {editing && <AddEvents />}
    </div>
  );
}

function Todo({ todo, indx }) {
  const [clickValue, setClickValue] = useState(false);
  function onClickStyle() {
    setClickValue(!clickValue)
  }
  
  const style = clickValue ? {textDecoration: "line-through"} : {textDecoration: "none"}

  return (
    <div>
      <h6 style={style} onClick={onClickStyle} > 
        {" "}
        {indx + 1}.{todo}
      </h6>
    </div>
  );
}

export default connect(
  state => state,
  actionCreators
)(Event);
