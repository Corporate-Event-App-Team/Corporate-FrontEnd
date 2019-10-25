import React from "react";
import { dummyEventData } from "./data";
import styled from "styled-components";

const StyledDummyDiv = styled.div`
  font-size: 0.7em;
  line-height: 0.3em;
  display: flex;
  margin: 0.6em;
  padding: 0.5em;
  background: white;
  border: 0.3em solid #fbab06;
  width: 45vw;
  margin-left: 10vw;
`;
const StyledDummyTextDiv = styled.div`
  display: flex;
  margin-top: 1em;
  justify-content: space-around;
  text-align: center;
`;

const DummyEvents = () => {
  return (
    <div>
      This is what your events will look like! Click Add events to track your
      own events.
      {dummyEventData.map(event => {
        return (
          <StyledDummyDiv key={event.eventId}>
            <img
              style={{ width: "15vw", height: "17vh" }}
              alt="event pictures"
              src={event.pictures}
            />
            <StyledDummyTextDiv>
              <div style={{ padding: "0.5em", margin: "0.5em" }}>
                <h4>Event Name: {event.eventName}</h4>
                <h4>Client: {event.client}</h4>
                <h4>
                  Deadline: {event.date} {event.time} PM
                </h4>
                <h4>Description: {event.description}</h4>
                <h4>Budget: {event.budget}</h4>
              </div>
            </StyledDummyTextDiv>
          </StyledDummyDiv>
        );
      })}
    </div>
  );
};

export default DummyEvents;
