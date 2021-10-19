import React from "react";
import styled from "@emotion/styled";
import { MBTI, MBTIType } from "../../../common/Result";
import Understand from "../../../style/image/understand.png";

interface IMain {
  grade: MBTIType;
}

type MainImage = {
  grade: MBTIType;
};

export const Main = ({ grade }: IMain): React.ReactElement => {
  return (
    <>
      <MainWrapper>
        <Title color={MBTI[grade].color}>{" " + MBTI[grade].title + " "}</Title>
        <MainImage grade={grade} />
        <SubTitle>{MBTI[grade].subTitle}</SubTitle>
      </MainWrapper>
    </>
  );
};

const MainImage = styled.div`
  background-image: url(${(props: MainImage) => MBTI[props.grade].image});
  background-size: cover;
  background-repeat: none;
  margin: auto;
  width: 5rem;
  height: 5rem;

  margin-bottom: 1rem;
`;

const MainWrapper = styled.div`
  width: fit-content;
  height: 30%;
  margin: auto;
  margin-top: 2rem;
`;

const Title = styled.div`
  text-align: center;
  width: 100px;
  margin: auto;
  margin-bottom: 1rem;
  font-family: "AppleSDB";
  font-size: 1.2rem;
  box-shadow: inset 0 -11px 0 ${(props) => props.color};
`;

const SubTitle = styled.div`
  text-align: center;
  font-family: "AppleSDB";
`;
