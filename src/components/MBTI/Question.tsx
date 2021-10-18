import React from "react";
import styled from "@emotion/styled";
import { MBTI } from "../../common/Questions";

interface IQuestion {
  idx: number;
}

export const Question = ({ idx }: IQuestion): React.ReactElement => {
  return (
    <>
      <QuestionWrapper>
        <QuestionIndex>{idx}번</QuestionIndex>
        <QuestionBox>{MBTI[idx].question}</QuestionBox>
      </QuestionWrapper>
    </>
  );
};

const QuestionWrapper = styled.div`
  width: 100%;
  height: 10rem;
  padding: 5px;
  background-color: #fff;
  border-radius: 10px;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "AppleSDB";
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const QuestionBox = styled.div`
  margin-bottom: 1rem;
  white-space: pre-line;

  font-size: 1.2rem;
`;

const QuestionIndex = styled.div`
  margin-bottom: 1rem;
`;
