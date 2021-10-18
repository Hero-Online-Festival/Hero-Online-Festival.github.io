import styled from "@emotion/styled";
import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Header } from "../../components/Main";
import { Question } from "../../components/MBTI/Question";
import { Selections } from "../../components/MBTI/Selections";

type TParams = { idx: string };

const Page = ({ match }: RouteComponentProps<TParams>): React.ReactElement => {
  const idx: number = Number(match.params.idx);

  return (
    <>
      <MBTIPage>
        <Header />
        <MBTIWrapper>
          <Question idx={idx} />
          <Selections idx={idx} />
        </MBTIWrapper>
      </MBTIPage>
    </>
  );
};

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
