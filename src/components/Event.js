import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import AddEvents from "./AddEvents";
import { StyledShowEvent, StyledEventCard, StyledEventButton } from "../styles";
import events_icon_2 from "../imgs/events_icon_2.gif";
import edit_icon from "../imgs/edit_icon.png";
import delete_icon from "../imgs/delete_icon.png";
import NavBar from "./NavBar";
import { NavLink } from "react-router-dom";

export function Event(props) {
  let userEvents = JSON.parse(window.localStorage.getItem("userEvents"));
  let event = userEvents.find(event => event.eventId === props.match.params.id);
  let eventTodolist = event.todoList.split(",");
  let eventVendors = event.vendors.split(",");

  const {
    editEvent,
    deleteEvent,
    setEventBody,
    setStorageEvent,
    editing
  } = props;
  return (
    <div style={{ width: "98vw" }}>
      <StyledShowEvent>
        <NavBar />
        {!editing && (
          <StyledEventCard>
            <NavLink
              style={{
                textDecoration: "none",
                height: "3vh",
                color: "white",
                padding: "1em",
                background: "#090429"
              }}
              to="/dashboard"
            >{`<`}</NavLink>
            <img src={events_icon_2} alt="event-logo" />
            <div>
              <h6>Name of Event: {event.eventName}</h6>
              <h6>Description: {event.description} </h6>
              <h6>Name of Client: {event.client} </h6>
              <h6>Date: {event.date} </h6>
              <h6>Time: {event.time} </h6>
              <h6>Budget: {event.budget} </h6>
            </div>
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
              <StyledEventButton
                onClick={() =>
                  editEvent(props, event, setEventBody, setStorageEvent)
                }
              >
                <img
                  style={{ width: "2vw", height: "4vh" }}
                  alt="StyledEventButton icon"
                  src={edit_icon}
                />
              </StyledEventButton>
              <StyledEventButton
                onClick={() => deleteEvent(props, event, setStorageEvent)}
              >
                <img
                  style={{ width: "2vw", height: "4vh" }}
                  alt="button icon"
                  src={delete_icon}
                />
              </StyledEventButton>
            </div>
          </StyledEventCard>
        )}
        {editing && <AddEvents />}
      </StyledShowEvent>
    </div>
  );
}

function Todo({ todo, indx }) {
  const [clickValue, setClickValue] = useState(false);
  function onClickStyle() {
    setClickValue(!clickValue);
  }

  const style = clickValue
    ? { textDecoration: "line-through" }
    : { textDecoration: "none" };

  return (
    <div>
      <h6 style={style} onClick={onClickStyle}>
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
