import React, {useState} from "react";
import NavBar from "./NavBar";
import {StyledAddEvntsForm, StyledAddEvntsDiv, StyledAddEvntInpt,StyledButton} from "../styles";
import {connect} from "react-redux";
import * as actionCreators from "../state/actionCreators";
import uuid from "uuid";


const AddEvents = (props) => {
    const {setAddedEvent,setEventBody, addedEvent,eventBody,setStorageEvent,storageEvent} =props;

    if(props.editing) {
        setEventBody(props.event)
    }

    const valueChange = (e) => {
        setEventBody({...eventBody, [e.target.name]: e.target.value});
        props.newEvent.event = eventBody;
        setAddedEvent({...eventBody, [e.target.name]: e.target.value});
    };

    const submitEvent = (e) => {
        e.preventDefault();
        props.AddEvent(props,eventBody)
        props.showUser(eventBody);
        setStorageEvent([...storageEvent,addedEvent])
    }

    return (
        <StyledAddEvntsDiv>
            <NavBar/>
            <StyledAddEvntsForm>
                <label>Budget</label>
                <StyledAddEvntInpt value={eventBody.budget} name="budget" onChange={valueChange}/>
                <label> Client Company Name </label>
                <StyledAddEvntInpt value={eventBody.client} name="client" onChange={valueChange}/>
                <label> Event Description</label>
                <StyledAddEvntInpt value={eventBody.description} name="description" onChange={valueChange}/>
                <label>Event Name</label>
                <StyledAddEvntInpt value={eventBody.eventName} name="eventName" onChange={valueChange}/>
                <label>todolist</label>
                <StyledAddEvntInpt value={eventBody.todoList} name="todoList" onChange={valueChange}/>
                <label>Vendors</label>
                <StyledAddEvntInpt value={eventBody.vendors} name="vendors" onChange={valueChange}/>
                <StyledButton onClick={submitEvent}>{props.editing ? "Edit Event" : "Add Event" }</StyledButton>
            </StyledAddEvntsForm>
        </StyledAddEvntsDiv>
    )
}

export default connect(state => state, actionCreators)(AddEvents);