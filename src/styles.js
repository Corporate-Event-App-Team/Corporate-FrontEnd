import styled from "styled-components";
import login_back from "./imgs/login_back.jpg";

export const StyledLoginDiv = styled.div`
  background-image: url(${login_back});
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 1vw;
  align-items: center;
  color: #01233f;
  width: 30vw;
  margin-left: 30vw;
  margin-top: 1em;
  background-color: white;
`;

export const StyledInput = styled.input`
  border: 1px solid #01233f;
  padding: 0.5em;
`;

export const StyledPassword = styled.input`
  border: 1px solid #01233f;
  padding: 0.5em;
`;

export const StyledButton = styled.button`
  margin: 1em;
  padding: 0.7em;
  background-color: #01233f;
  border: none;
  width: 13vw;
  color: aliceblue;
  :hover {
    background: #ffc038;
  }
`;

export const StyledImg = styled.img`
  width: 7vw;
  height: 6vw;
`;

export const StyledNavBar = styled.div`
  height: 12vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 6px -6px black;
`;

export const StyledFigure = styled.figure`
  margin: 1em;
`;

export const StyledRegisterBtn = styled.button`
  border: none;
  margin-bottom: 0.7em;
  margin-right: 1em;
  padding: 0.7em;
  background-color: #090429;
  color: white;
  &:hover {
    background-color: #fbab06;
  }
`;

export const StyledDashboard = styled.div`
  display: flex;

  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const StyledUSerDiv = styled.div`
  width: 25vw;
  height: 100vh;
  background: #090429;
  color: white;
  box-shadow: 0 +6px 8px 6px lightblue;
  h4 {
    margin-top: 8vw;
  }
  img {
    width: 8vw;
    height: 12vh;
  }
`;

export const StyledH4 = styled.h4`
  background: #090429;
  color: white;
  width: 15vw;
  padding: 0.8em;
  margin-left: 1em;
`;

export const StyledAddEventBtn = styled.button`
  background: #090429;
  color: white;
  width: 15vw;
  padding: 0.8em;
  margin-left: 1em;
  border: none;
  :hover {
    background: #090429;
  }
`;

export const StyledAddEvntsForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 1vw;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 1em;
`;

export const StyledAddEvntsDiv = styled.div`
  color: #090429;
  font-weight: bold;
  width: 100vw;
  height: 150vh;
`;

export const StyledAddEvntInpt = styled.input`
  border: 1px solid #090429;
  padding: 0.5em;
  width: 40%;
  margin: 0.5em;
  padding: 1em;
`;

export const StyledAddEventsCont = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;
export const StyledImgAddEvent = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 1em;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

export const StyledDashEventDiv = styled.div`
  background: #fbab06;
  width: 80vw;
  height: 100vh;
`;

export const StyledShowEvent = styled.div`
  background-color: #fbab06;
  width: 100vw;
  height: 100vh;
  align-items: center;
`;
export const StyledEventCard = styled.div`
  display: flex;
  background-color: white;
  color: #090429;
  padding: 2em;
  width: 80vw;
  margin-left: 10vw;
  margin-top: 20vh;
`;

export const StyledEventButton = styled.button`
  padding: 0.5em;
  margin: 0.5em;
  margin-top: 2em;
  margin-left: 1em;
  background-color: white;
  border: none;
`;

export const StyledViewEvent = styled.button`
  margin-top: 2em;
  margin-left: 1em;
  background-color: #090429;
  :hover {
    background-color: #fbab06;
  }
  border: none;
  padding: 0.5em;
`;
