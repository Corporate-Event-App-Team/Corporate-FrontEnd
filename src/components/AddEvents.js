import React, {useState} from "react";
// import NavBar from "./NavBar";
import {StyledAddEvntsForm, StyledAddEvntsDiv, StyledAddEvntInpt,StyledButton} from "../styles";
import {connect} from "react-redux";
import * as actionCreators from "../state/actionCreators";
import uuid from "uuid";

const AddEvents = (props) => {
    console.log("propd from add event", props);
const [eventBody, setEventBody] = useState({
    budget: '',
    description: '',
    events_id: uuid(),
  })
    // {
    //     eventName: '',
    //  clientName: ""
    //     descriptionOfEvent: '',
    //     dateDue: '',
    //      completed: false,
    //     time: '',
    //     todoList: [],
    //     vendors: []
    //   }

    const valueChange = (e) => {
        setEventBody({...eventBody, [e.target.name]: e.target.value, id: props.user.user.id});
        props.newEvent.event = eventBody;
    };

    const submitEvent = (e) => {
        e.preventDefault();
        props.AddEvent(props,eventBody)
    }

    return (
        <StyledAddEvntsDiv>
            {/* <NavBar/> */}
            <StyledAddEvntsForm>
                <label>Budget</label>
                <StyledAddEvntInpt value={eventBody.budget} name="budget" onChange={valueChange}/>
                {/* <label> Client Company Name </label>
                <StyledAddEvntInpt value={eventBody.company} name="company" onChange={valueChange}/> */}
                <label>Description</label>
                <StyledAddEvntInpt value={eventBody.description} name="description" onChange={valueChange}/>
                <StyledButton onClick={submitEvent}>Add event</StyledButton>
            </StyledAddEvntsForm>
        </StyledAddEvntsDiv>
    )
}

export default connect(state => state, actionCreators)(AddEvents);