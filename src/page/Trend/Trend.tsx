import React from "react";
import styled from "@emotion/styled";
import { RouteComponentProps } from "react-router-dom";
import { Header } from "../../components/Main";
import { Question } from "../../components/Trend/Question";
import { Selections } from "../../components/Trend/Selections";

type TParams = { idx: string };

const Page = ({ match }: RouteComponentProps<TParams>): React.ReactElement => {
  const idx: number = Number(match.params.idx);

  return (
    <>
      <TrendPage>
        <Header />
        <TrendWrapper>
          <Question idx={idx} />
          <Selections idx={idx} />
        </TrendWrapper>
      </TrendPage>
    </>
  );
};

const TrendPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f0f0;
`;

const TrendWrapper = styled.div`
  width: 70%;
  height: 70%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 5rem;
`;

export default Page;
