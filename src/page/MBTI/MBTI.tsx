import styled from "@emotion/styled";
import React from "react";
import { useCallback } from "react";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { Header } from "../../components/Main";
import { Question } from "../../components/MBTI/Question";
import { Selections } from "../../components/MBTI/Selections";
import Home from "../../style/image/home.png";
import Arrow from "../../style/image/left-arrow.png";
type TParams = { idx: string };

interface IHome {
  url: string;
}

const Page = ({ match }: RouteComponentProps<TParams>): React.ReactElement => {
  const idx: number = Number(match.params.idx);
  const route = idx === 0 ? `/main` : `/mbti/${idx - 1}`;
  const history = useHistory();
  const onLink = useCallback(
    (link: string) => {
      history.replace(link);
    },
    [history]
  );
  return (
    <>
      <MBTIPage>
        <Header />
        <MBTIWrapper>
          <Question idx={idx} />
          <Selections idx={idx} />
        </MBTIWrapper>
        <ButtonWrapper>
          <PreviousButton
            onClick={() => onLink(route)}
            url={Arrow}
          ></PreviousButton>
          <HomeButton onClick={() => onLink("/main")} url={Home}></HomeButton>
          <SpaceButton></SpaceButton>
        </ButtonWrapper>
      </MBTIPage>
    </>
  );
};

const ButtonWrapper = styled.div`
  display: flex;
  width: 70%;
  justify-content: space-between;
  margin: auto;
  padding-left: 5px;
  padding-right: 5px;
`;

const SpaceButton = styled.div`
  width: 30px;
  height: 30px;
  padding: 5px;
`;

const PreviousButton = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  width: 30px;
  height: 30px;
  background-size: cover;

  background-image: url(${(props: IHome) => props.url});
`;

const HomeButton = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  width: 30px;
  height: 30px;
  background-size: cover;

  background-image: url(${(props: IHome) => props.url});
`;

const MBTIPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f0f0;
`;

const MBTIWrapper = styled.div`
  width: 70%;
  height: 60%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 5rem;
`;
export default Page;
