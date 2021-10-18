import React from "react";
import styled from "@emotion/styled";
import { Header } from "../../../components/Main";
import { useSelector } from "react-redux";
import { ReducerType } from "../../../stores/rootReducer";
import { TMBTI, updateMBTIAnswer } from "../../../stores/mbti/mbti";

export const Page = (): React.ReactElement => {
  const mbtiResult = useSelector<ReducerType, TMBTI>(
    (state) => state.MBTIReducer
  );
  console.log(mbtiResult.scores);
  return (
    <>
      <ResultPage>
        <Header />
      </ResultPage>
    </>
  );
};

const ResultPage = styled.div``;

export default Page;
