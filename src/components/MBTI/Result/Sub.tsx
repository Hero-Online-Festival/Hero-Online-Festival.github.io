import React from "react";
import styled from "@emotion/styled";
import { MBTI, MBTIType } from "../../../common/Result";

interface ISub {
  grade: MBTIType;
}

export const Sub = ({ grade }: ISub): React.ReactElement => {
  return (
    <>
      <SubWrapper color={MBTI[grade].color}>
        <TopText>{MBTI[grade].topText}</TopText>
        <MidText>{MBTI[grade].midText}</MidText>
        <BottomText>{MBTI[grade].lastText}</BottomText>
      </SubWrapper>
    </>
  );
};

const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 70%;
  max-height: 50%;
  padding: 1rem;
  margin: auto;
  margin-top: 1rem;
  background-color: ${(props) => props.color};
  border-radius: 10px;
`;

const TopText = styled.div`
  text-align: center;
  font-size: 0.8rem;
  margin-bottom: 0.9rem;
  font-family: "AppleSDB";
`;

const MidText = styled.div`
  text-align: center;
  line-height: 1.3rem;
  font-size: 0.8rem;
  margin: auto;
  margin-bottom: 1rem;
  font-family: "AppleSDB";
`;

const BottomText = styled.div`
  text-align: center;
  font-size: 0.8rem;

  margin: auto;
  font-family: "AppleSDB";
`;
