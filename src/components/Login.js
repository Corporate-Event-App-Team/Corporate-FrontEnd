import React, { useState } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import { Formik } from "formik";
// import { NotificationManager } from "react-notifications";

import {
  StyledLoginDiv,
  StyledForm,
  StyledInput,
  StyledPassword,
  StyledButton
} from "../styles";
 import NavBar from "./NavBar";

export const Login = props => {
  const [userDetails] = useState({ username: "", password: "" });
  console.log("props from redux Store", props);

  return (
    <StyledLoginDiv>
      <NavBar />
      <Formik
        initialValues={userDetails}
        validate={userDetails => {
          let errors = {};
          if (!userDetails.username) {
            errors.username = "Please provide a username!";
          }
          if (!userDetails.password) {
            errors.password = "Please provide a password!";
          } else if (userDetails.password.length < 9) {
            errors.password = "Your password must be more than 8 characters!";
          } else if (userDetails.password.length > 11) {
            errors.password = "Your password must be less than 12 characters!";
          }
          return errors;
        }}
        onSubmit={(userDetails, actions) => {
          props.onLogin(userDetails,props);
          actions.resetForm();
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <StyledForm onSubmit={handleSubmit}>
            <h4>Login to continue</h4>
            <label>Username</label>
            <StyledInput
              value={values.username}
              type="text"
              name="username"
              onChange={handleChange}
            />
            <span
              style={{
                color: "red",
                background: "rgba(255, 255, 255, 0.0)",
                padding: "0.5em",
                margin: "0.5em"
              }}
            >
              {" "}
              {errors.username && touched.username && errors.username}
            </span>
            <label>Password</label>
            <StyledPassword
              value={values.password}
              type="password"
              name="password"
              onChange={handleChange}
            />
            <span
              style={{
                color: "red",
                background: "rgba(255, 255, 255, 0.0)",
                padding: "0.5em",
                margin: "0.5em"
              }}
            >
              {" "}
              {errors.password && touched.password && errors.password}
            </span>
            <StyledButton
              type="submit"
              // onClick={() => NotificationManager.info("A moment while we check your details")}
              disabled={isSubmitting}
            >
              Submit
            </StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledLoginDiv>
  );
};

export default connect(
  state => state,
  actionCreators
)(Login);
