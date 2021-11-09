import React from "react";
import { auth, provider } from "../firebase";
import { Button } from "@material-ui/core";
import styled from "styled-components";

function Login() {
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <LoginContainer>
      <LoginInnerContainer className="login__container">
        <img
          src="https://raw.githubusercontent.com/SedatCeyhan/LogoStorage/cc3e8c46df3d514047773617138661fabf2533df/slackIcon.svg"
          alt=""
        />
        <div className="login__text">
          <h1>Sign in to my Slack clone</h1>
          {/* ------------------------------------------------ */}
          <p style={{padding:"12px"}}>Slack Clone Project</p>
        </div>

        <Button type="submit" onClick={signIn}>
          Sign in with Google
        </Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  background-color: #f8f8f8;
  height: 100vh;
  display: grid;
  place-items: center;
`;

const LoginInnerContainer = styled.div`
  padding: 100px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  > img {
    object-fit: contain;
    height: 165px;
    margin-bottom: 35px;
  }

  > button {
    margin-top: 40px;
    text-transform: inherit !important;
    background-color: #0a8d48 !important;
    color: white;
  }
`;
