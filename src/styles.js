import styled from "styled-components";

export const StyledLoginDiv = styled.div`
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-top: 1vw;
  align-items: center;
  color: white;
  width: 40vw;
  margin-left: 30vw;
  margin-top: 1em;
  border: 0.5em solid rgba(255, 255, 255, 0.3);
`;

export const StyledInput = styled.input`
  border: none;
  border-bottom: 2px solid white;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0.5em;
  border-radius: 1em;
  background-size: 20%;
  background-repeat: no-repeat;
  text-indent: 20px;
  :hover {
    background-image: none;
  }
`;

export const StyledPassword = styled.input`
  border: none;
  border-bottom: 2px solid white;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0.5em;
  border-radius: 1em;
  background-size: 20%;
  background-repeat: no-repeat;
  text-indent: 20px;
  :hover {
    background-image: none;
  }
`;

export const StyledButton = styled.button`
  margin: 1em;
  padding: 0.7em;
  background-color: #3aa9cf;
  border: none;
  border-radius: 1em;
  width: 13vw;
  color: aliceblue;
  :hover {
    background: #fc6567;
  }
`;

export const StyledImg = styled.img`
  width: 7vw;
  height: 6vw;
  /* margin: 1em; */
`;

export const StyledNavBar = styled.div`
  height: 12vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255, 255, 255, 0.5);
`;

export const StyledFigure = styled.figure`
  margin: 1em;
`;

export const StyledRegisterBtn = styled.button`
  border-radius: 0.5em;
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
  background: rgba(255, 255, 255, 0.3);
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
  background: #fbab06;
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
  color: white;
  border: 0.5em solid rgba(255, 255, 255, 0.3);
  width: 40vw;
  margin-left: 30vw;
  margin-top: 1em;
`;

export const StyledAddEvntsDiv = styled.div`
  background-size: cover;
  width: 100vw;
  height: 100vh;
`;

export const StyledAddEvntInpt = styled.input`
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  padding: 0.5em;
  border-radius: 1em;
  margin: 0.5em;
  padding: 1em;
`;

export const StyledDashEventDiv = styled.div`
  background: rgba(255, 255, 255, 0.3);

  width: 80vw;
  height: 100vh;
`;
