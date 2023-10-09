import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";

export const Welcome = ({ currentUser }) => {
  // const [userName, setUserName] = useState("");

  // const getUserName = async () => {
  //   setUserName(
  //     await JSON.parse(
  //       localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
  //     ).username
  //   );
  // }
  // useEffect(() => {
  //   getUserName()
  // }, []);
  console.log(currentUser)
  return (
    <Container>
      <img src={Robot} alt="Robot" />
      <h1>Welcome, <span>{currentUser?.username}!</span></h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #C70DF6;
  }
`;