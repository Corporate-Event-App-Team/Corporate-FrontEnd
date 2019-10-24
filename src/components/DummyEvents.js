import React from "react";
import { dummyEventData } from "./data";
import styled from "styled-components";

const StyledDummyDiv = styled.div`
  font-size: 0.7em;
  line-height: 0.3em;
  display: flex;
  /* justify-content: space-around; */
  /* text-align: center; */
  margin: 0.6em;
  padding: 0.5em;
  background: white;
  border: 0.3em solid #fbab06;
   width: 65vw; 
  margin-left: 4vw;
`;
const StyledDummyTextDiv = styled.div`
  display: flex;
  margin-top: 1em;
  justify-content: space-around;
  text-align: center;

`;

const DummyEvents = () => {
  console.log("dummy event data", dummyEventData);

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
              <div  style={{padding:"0.5em", margin:"0.5em"}}>
                <h4>Event Name: {event.eventName}</h4>
                <h4>
                  Deadline: {event.date} {event.time} PM
                </h4>
                <h4>Description: {event.description}</h4>
              </div>
              <div style={{padding:"0.5em", margin:"0.5em"}}>
                TodoList:{" "}
                {event.todoList.map((todo, index) => (
                  <h4 key={index}>
                    {index}. {todo}
                  </h4>
                ))}
              </div>
              <div style={{padding:"0.5em", margin:"0.5em"}}>
                Vendors:{" "}
                {event.vendors.map((vendor, index) => (
                  <h4 key={index}>
                    {index}. {vendor}
                  </h4>
                ))}
              </div>
            </StyledDummyTextDiv>
          </StyledDummyDiv>
        );
      })}
    </div>
  );
};

export default DummyEvents;
