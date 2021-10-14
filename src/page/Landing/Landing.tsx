import React from "react";
import styled from "@emotion/styled";

const Page = (): React.ReactElement => {
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
  font-size: 2.5rem;
  text-align: center;
  line-height: 1.2;
  font-family: "NixGon";
  letter-spacing: 3px;
  color: #fff;
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
