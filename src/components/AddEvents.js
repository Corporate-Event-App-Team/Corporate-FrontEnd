import React from "react";
import NavBar from "./NavBar";
import {
  StyledAddEvntsForm,
  StyledAddEventsCont,
  StyledImgAddEvent,
  StyledAddEvntsDiv,
  StyledAddEvntInpt,
  StyledButton
} from "../styles";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import uuid from "uuid";
import login_back from "../imgs/login_back.jpg";
import { NavLink } from "react-router-dom";

const AddEvents = props => {
  const {
    setAddedEvent,
    setEventBody,
    addedEvent,
    eventBody,
    setStorageEvent,
    storageEvent
  } = props;

  if (props.editing) {
    setEventBody(props.event);
  }

  const valueChange = e => {
    setEventBody({ ...eventBody, [e.target.name]: e.target.value });
    props.newEvent.event = eventBody;
    setAddedEvent({ ...eventBody, [e.target.name]: e.target.value });
  };

  const submitEvent = e => {
    e.preventDefault();
    props.AddEvent(props, eventBody);
    props.showUser(eventBody);
    setStorageEvent([...storageEvent, addedEvent]);
    setEventBody({
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
  };

  return (
    <StyledAddEvntsDiv>
      <NavBar />
      <StyledAddEventsCont>
        <StyledImgAddEvent>
          <img alt="people talking" src={login_back} />
        </StyledImgAddEvent>
        <StyledAddEvntsForm>
          <NavLink
            style={{
              textDecoration: "none",
              color: "white",
              padding: "1em",
              background: "#090429"
            }}
            to="/dashboard"
          >{`<`}</NavLink>
          <h4>Edit or add a new event</h4>
          <label>Budget</label>
          <StyledAddEvntInpt
            value={eventBody.budget}
            name="budget"
            onChange={valueChange}
          />
          <label> Client Company Name </label>
          <StyledAddEvntInpt
            value={eventBody.client}
            name="client"
            onChange={valueChange}
          />
          <label> Event Description</label>
          <StyledAddEvntInpt
            value={eventBody.description}
            name="description"
            onChange={valueChange}
          />
          <label>Event Name</label>
          <StyledAddEvntInpt
            value={eventBody.eventName}
            name="eventName"
            onChange={valueChange}
          />
          <label>todolist</label>
          <StyledAddEvntInpt
            value={eventBody.todoList}
            name="todoList"
            onChange={valueChange}
          />
          <label>Vendors</label>
          <StyledAddEvntInpt
            value={eventBody.vendors}
            name="vendors"
            onChange={valueChange}
          />
          <label>Date Due</label>
          <StyledAddEvntInpt
            type="date"
            value={eventBody.date}
            name="date"
            onChange={valueChange}
          />
          <label>Time Due</label>
          <StyledAddEvntInpt
            value={eventBody.time}
            name="time"
            onChange={valueChange}
          />
          <StyledButton onClick={submitEvent}>Submit</StyledButton>
        </StyledAddEvntsForm>
      </StyledAddEventsCont>
    </StyledAddEvntsDiv>
  );
};

export default connect(
  state => state,
  actionCreators
)(AddEvents);
