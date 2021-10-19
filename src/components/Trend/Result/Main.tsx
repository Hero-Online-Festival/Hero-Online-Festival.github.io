import React from "react";
import styled from "@emotion/styled";
import { Trend } from "../../../common/Result";

interface IMain {
  score: number;
}

type MainImage = {
  score: number;
};

export const Main = ({ score }: IMain): React.ReactElement => {
  return (
    <>
      <MainWrapper>
        <Title>{Trend[score].title}</Title>
        <SubTitle>{Trend[score].subTitle}</SubTitle>
        <Score>{Trend[score].score}</Score>
        <MainImage score={score} />
      </MainWrapper>
    </>
  );
};

const MainImage = styled.div`
  background-image: url(${(props: MainImage) => Trend[props.score].image});
  background-size: cover;
  background-repeat: none;
  margin: auto;
  width: 4rem;
  height: 4rem;
  margin-top: 1rem;
`;
const MainWrapper = styled.div`
  width: fit-content;
  height: 30%;
  margin: auto;
  margin-top: 2rem;
`;

const Title = styled.div`
  font-family: "AppleSDM";
  font-size: 0.9rem;
  text-align: center;
`;

const SubTitle = styled.div`
  font-family: "AppleSDB";
  font-size: 2rem;
  text-align: center;
`;

const Score = styled.div`
  font-family: "AppleSDM";
  text-align: center;
`;
