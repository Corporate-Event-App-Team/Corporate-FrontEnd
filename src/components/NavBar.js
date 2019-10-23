import React from "react";
import { NavLink } from "react-router-dom";
import corporate_logo from "../imgs/corporate_logo.png";
import {
  StyledImg,
  StyledFigure,
  StyledRegisterBtn,
  StyledNavBar
} from "../styles";

const NavBar = () => {
  return (
    <StyledNavBar>
      <StyledFigure>
        <StyledImg alt="logo of corporate events" src={corporate_logo} />
      </StyledFigure>

      <div>
        <NavLink style={{ textDecoration: "none" }} to="/register">
          <StyledRegisterBtn>Register</StyledRegisterBtn>
        </NavLink>
      </div>
    </StyledNavBar>
  );
};

export default NavBar;
