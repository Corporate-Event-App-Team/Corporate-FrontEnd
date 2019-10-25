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
import UserEvents from "./UserEvents";

export const Dashboard = props => {
  let userEvents = JSON.parse(window.localStorage.getItem("userEvents"));
  const { getUser, login, user } = props;

  useEffect(() => {
    getUser(login.username);
  }, [login, user, getUser]);

  return (
    <StyledDashboard>
      <StyledUSerDiv>
        <h4>
          Welcome to the Corporate
          <br /> Event Planner Dashboard
        </h4>
        <img alt="user icon" src={user_icon_2} />
        <h4>Hello, {login.username}</h4>
      </StyledUSerDiv>
      <StyledDashEventDiv>
        <StyledH4>Events</StyledH4>
        <div>
          {userEvents === null ? (
            <DummyEvents />
          ) : (
            <UserEvents userEvents={userEvents} />
          )}
        </div>
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
