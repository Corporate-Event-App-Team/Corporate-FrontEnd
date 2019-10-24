import React, { useEffect } from "react";
 import user_icon_2 from "../imgs/user_icon_2.png";
import {
  StyledDashboard,
  StyledUSerDiv,
  StyledH4,
  StyledAddEventBtn,
  StyledDashEventDiv
} from "../styles";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import DummyEvents from "./DummyEvents";

export const Dashboard = props => {
  console.log("props from Dashboard", props);
  const {getUser,showUser,login,user} = props;
  useEffect(() => {
    getUser(login.username);
    showUser(user.id);
  }, [login,user, getUser,showUser]);

  const userEvents = props.events.events;
  console.log("userevents", userEvents);
  return (
    <StyledDashboard>
      <StyledUSerDiv>
          <h4>Welcome to the Corporate Event Planner Dashboard</h4>
        <img alt="user icon" src={user_icon_2} />
        <h4>Hello, {login.username}</h4>
      </StyledUSerDiv>
      <StyledDashEventDiv>
        <StyledH4>Past Events</StyledH4>
        <div>
          {userEvents.length === 0 ? (
              <DummyEvents/>
            // <h4>You don't have any events</h4>
          ) : (
            userEvents.map(event => {
              return (
                <div key={event.id}>
                  <h4>Budget: {event.budget}</h4>
                  <h4>Company: {event.company}</h4>
                  <h4>Description: {event.description}</h4>
                </div>
              );
            })
          )}
        </div>
        {/* <StyledH4>Present Events</StyledH4>
        <div>Events from Backend</div> */}
        <NavLink to="/dashboard/add-event">
          <StyledAddEventBtn>Add a new event</StyledAddEventBtn>
        </NavLink>
      </StyledDashEventDiv>
    </StyledDashboard>
  );
};

export default connect(
  state => state,
  actionCreators
)(Dashboard);
