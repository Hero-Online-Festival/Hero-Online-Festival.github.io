import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";

const Page = (): React.ReactElement => {
  const history = useHistory();
  setTimeout(() => {
    history.push("/main");
  }, 3000);

  return (
    <>
      <LandingPage>
        <LandingTextWrapper>
          <LandingText>
            HERO
            <br />
            ONLINE
            <br />
            FESTIVAL
          </LandingText>
        </LandingTextWrapper>
        <CopyWrite>46th Student Council of Engineering HERO</CopyWrite>
      </LandingPage>
    </>
  );
};

const CopyWrite = styled.div`
  position: relative;
  font-size: 0.8em;
  color: #fff;
  font-family: "NixGon";
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

const LandingTextWrapper = styled.div`
  width: fit-content;
  margin: auto;
`;

const LandingText = styled.div`
  width: fit-content;
  font-size: 5rem;
  text-align: center;
  line-height: 1.2;
  font-family: "NixGon";
  letter-spacing: 3px;
  color: #fff;
  text-align: center;
  -webkit-animation: glow 1s ease-in-out infinite alternate;
  -moz-animation: glow 1s ease-in-out infinite alternate;
  animation: glow 1s ease-in-out infinite alternate;

  @-webkit-keyframes glow {
    from {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #e60073,
        0 0 40px #e60073, 0 0 50px #e60073, 0 0 60px #e60073, 0 0 70px #e60073;
    }

    to {
      text-shadow: 0 0 20px #fff, 0 0 30px #ff4da6, 0 0 40px #ff4da6,
        0 0 50px #ff4da6, 0 0 60px #ff4da6, 0 0 70px #ff4da6, 0 0 80px #ff4da6;
    }
  }
`;

const LandingPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(#0064cc, #b57fdb);
`;

export default Page;
