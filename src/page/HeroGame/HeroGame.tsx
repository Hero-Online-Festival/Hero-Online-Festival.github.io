import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { toIdentifier } from "@babel/types";

const Page = (): React.ReactElement => {
  const history = useHistory();

  return (
    <>
      <HeroGamePage>
        <HeaderWrapper>
          <TitleText>HERO ONLINE FESTIVAL</TitleText>
          <MainText>히어로 게임</MainText>
        </HeaderWrapper>
      </HeroGamePage>
    </>
  );
};

export default Page;

const HeaderWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const HeroGamePage = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#020000, #b10000);
  padding-top: 1rem;
`;

const TitleText = styled.div`
  width: fit-content;
  margin: auto;
  color: #fff;
  word-space: 1rem;
  font-family: "NixGon";
`;

const MainText = styled.div`
  margin: auto;
  text-align: center;
  font-size: 3rem;
  background: linear-gradient(#b10000, #020000);
  width: fit-content;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10rem;
  font-family: "NixGon";
`;

const CheckText = styled.div``;
const CheckButton = styled.div``;

const NameInput = styled.input``;

const NameButton = styled.div``;

const PhoneInput = styled.input``;

const PhoneButton = styled.div``;
