import React from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  border: 0.5em solid rgba(255, 255, 255, 0.3);
  margin-left: 7vw;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
  h3 {
    margin-left: 1.7em;
  }
  label input {
    height: 35px;
    width: 250px;
    border-radius: 10px;
    margin-bottom: 20px;
    margin-left: 1em;
    margin-right: 1em;
    background-color: rgba(255, 255, 255, 0.3);
  }
  button {
    height: 35px;
    width: 150px;
    border-radius: 10px;
    border: none;
    margin-left: 50%;
    margin-bottom: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #e54a51;
    color: white;
    &:hover {
      background-color: #7bcfeb;
    }
  }
`;

const Form = props => {
  console.log("props from register form", props);
  const { onFormSubmit, formValues, onNameChange } = props;
  //onPasswordChange, onCPasswordChange, onEmailChange

  return (
    <FormStyle>
      <h3>
        We offer centralised management for your
        <br /> event planning needs and allow you meet
        <br /> all your client’s requirements
        <br /> with ease. Fill in your information below
        <br /> to get started.
      </h3>
      <label>
        Username
        <input
          type="text"
          name="username"
          onChange={onNameChange}
          value={formValues.username}
        />
      </label>

      <label>
        Email Address
        <input
          type="text"
          name="email"
          onChange={onNameChange}
          value={formValues.email}
        />
      </label>

      <label>
        Name of Company
        <input
          type="text"
          name="company"
          onChange={onNameChange}
          value={formValues.company}
        />
      </label>

      <label>
        Role
        <input
          type="text"
          name="role"
          onChange={onNameChange}
          value={formValues.role}
        />
      </label>

      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={onNameChange}
          value={formValues.password}
        />
      </label>

      <button onClick={e => onFormSubmit(e, formValues)}>REGISTER</button>
    </FormStyle>
  );
};

export default Form;

