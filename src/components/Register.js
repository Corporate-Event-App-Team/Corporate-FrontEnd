import React, { useState } from "react";
// import { NotificationManager } from "react-notifications";
import styled from "styled-components";
import uuid from "uuid";
// import form_back from "../imgsk/form_back.jpeg";
// import logo from "../imgs/corporate_logo.png";
import Axios from "axios";
import Form from "./Form";


const RegisterStyle = styled.div`
  height: 100vh;
  background-size: cover;
  width: 100vw;

  nav {
    display: flex;
    justify-content: space-between;
    background-color: rgba(255, 255, 255, 0.3);

    img {
      width: 5%;
    }
    a {
      background-color: #090429;
      text-decoration: none;
      border-radius: 5px;
      width: 120px;
      height: 35px;
      text-align: center;
      margin-top: 12px;
      margin-bottom: 12px;
      margin-right: 15px;
      padding-top: 10px;
      color: white;
      &:hover {
        background-color: #fbab06;
      }
    }
  }
  div {
    display: flex;
    align-items: center;

    width: 50vw;
    margin-left: 25vw;
    margin-top: 1em;
  border: 0.5em solid rgba(255, 255, 255, 0.3);
    section {
      text-align: center;

      margin: 0;
    }
  }
`;

const initialFormValues = {
  company: "",
  email: "",
  id: uuid(),
  password: "",
  role: "",
  username: ""
};

export default function Register(props) {
  const [formValues, setFormValues] = useState(initialFormValues);
  const onNameChange = e => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const onFormSubmit = (e, formValues) => {
    e.preventDefault();
    if (formValues.password.length > 8 && formValues.password.length < 12) {
      Axios.post(
        "https://cors-anywhere.herokuapp.com/https://corporate-event-planner-build.herokuapp.com/api/auth/register",
       { username:formValues.username, password: formValues.password}
        )
        .then(response => {
          // NotificationManager.success("Registration successful");
          console.log("response from Register endpoint",response);
          props.history.push("/");
        })
        .catch(err => {
          // NotificationManager.error(
          //   err.message,
          //   "Something went terribly wrong!"
          // );
          console.log("error from Register endpoint",err);
        });
    } else {
      setFormValues({ ...formValues, password: "" });
      alert("password must be more than 8 characters but less than 12!!");
    }
  };

  return (
    <RegisterStyle>
      <nav>
        {/* <img src={logo} alt="corporate-logo" /> */}
        <a href="/">LOGIN</a>
      </nav>

      <div>
        {/* <img src={image} alt="for-register" /> */}

        <section>

          <Form
            onNameChange={onNameChange}
            onFormSubmit={onFormSubmit}
            formValues={formValues}
          />
        </section>
      </div>
    </RegisterStyle>
  );
}
