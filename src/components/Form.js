import React from "react";
import styled from "styled-components";

const FormStyle = styled.form`
  margin-left: 7vw;
  padding: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #01233f;
  background-color: white;
  text-align: center;
  h3 {
    margin-left: 1.7em;
  }
  input {
    height: 35px;
    width: 250px;
    border: 1px solid #01233f;
    margin-bottom: 20px;
    margin-left: 6em;
    margin-right: 1em;
  }
  button {
    height: 35px;
    width: 150px;
    /* border-radius: 10px; */
    border: none;
    margin-left: 10em;
    margin-bottom: 12px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #090429;
    color: white;
    &:hover {
      background-color: #ffc038;
    }
  }
`;

const Form = props => {
  const { onFormSubmit, formValues, onNameChange } = props;

  return (
    <FormStyle>
      <h3>
        We offer centralised management for your
        <br /> event planning needs and allow you meet
        <br /> all your client’s requirements
        <br /> with ease. Fill in your information below
        <br /> to get started.
      </h3>
      <input
        type="text"
        name="username"
        onChange={onNameChange}
        value={formValues.username}
        placeholder="username"
      />
      <input
        type="text"
        name="email"
        onChange={onNameChange}
        value={formValues.email}
        placeholder="email"
      />
      <input
        type="text"
        name="company"
        onChange={onNameChange}
        value={formValues.company}
        placeholder="company"
      />
      <input
        type="text"
        name="role"
        onChange={onNameChange}
        value={formValues.role}
        placeholder="role"
      />
      <input
        type="password"
        name="password"
        onChange={onNameChange}
        value={formValues.password}
        placeholder="password"
      />
      <button onClick={e => onFormSubmit(e, formValues)}>REGISTER</button>
    </FormStyle>
  );
};

export default Form;
