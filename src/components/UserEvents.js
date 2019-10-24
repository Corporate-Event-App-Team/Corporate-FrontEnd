import React from "react";
import {connect} from "react-redux";
import * as actionCreators from "../state/actionCreators";
import events_icon_2 from "../imgs/events_icon_2.gif";
import styled from "styled-components";
import {withRouter} from "react-router-dom";
import {StyledViewEvent} from "../styles";

const StyledDummyDiv = styled.div`
  font-size: 0.7em;
  line-height: 0.3em;
  display: flex;
  margin: 0.6em;
  padding: 0.5em;
  background: white;
  border: 0.3em solid #fbab06;
   width: 50vw; 
  margin-left: 4vw;
`;
const StyledDummyTextDiv = styled.div`
  display: flex;
  margin-top: 1em;
  justify-content: space-around;
  text-align: center;

`;



const UserEvents = (props) => {
  console.log("Event data", props);
    console.log("local storage events",);

    const viewCard  = (event) => (e) => {
        e.preventDefault();
        // props.setEvent(event);
        props.history.push(`/dashboard/event/${event.eventId}`)
    }

    // function onEventClick(event) {
    //     props.setEvent(event);
    //     props.history.push(`/events/${event.eventId}`)
    // }

  return (
    <div>
      {props.userEvents.map(event => {
        return (
          <StyledDummyDiv key={event.eventId} 
        //   onClick={() => viewCard(event)}
           >
            <img
              style={{ width: "15vw", height: "17vh" }}
              alt="event pictures"
              src={events_icon_2}
            />
            <StyledDummyTextDiv>
              <div  style={{padding:"0.5em", margin:"0.5em"}}>
                <h4>Event Name: {event.eventName}</h4>
                <h4>Client: {event.client}</h4>
                <h4>
                  Deadline: {event.date} {event.time} PM
                </h4>
                <h4>Description: {event.description}</h4>
                <h4>Budget: {event.budget}</h4>
              </div>
            </StyledDummyTextDiv>
            <StyledViewEvent style={{color: "white", width: "10vw", height: "5vh"}} onClick={viewCard(event)}>View Event</StyledViewEvent>
          </StyledDummyDiv>
        );
      })}
    </div>
  );
};

export default connect(state => state, actionCreators)(withRouter(UserEvents));
