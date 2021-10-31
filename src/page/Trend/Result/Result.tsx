import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { Header } from "../../../components/Main";
import { Main } from "../../../components/Trend/Result/Main";
import { Sub } from "../../../components/Trend/Result/Sub";
import { initTrendAnswer, TTrend } from "../../../stores/trend/trend";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ReducerType } from "../../../stores/rootReducer";
import { TrendScorePermute } from "../../../common/Calculater";

export const Page = (): React.ReactElement => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onLinkTo = useCallback(() => {
    dispatch(initTrendAnswer({}));
    history.replace("/main");
  }, [history]);

  const trendResult = useSelector<ReducerType, TTrend>(
    (state) => state.TrendReducer
  );

  const score = TrendScorePermute(trendResult.answers);
  return (
    <>
      <ResultPage>
        <Header />
        <ResultWrapper>
          <Main score={score} />
          <Sub score={score} />
        </ResultWrapper>
        <ApplyButton
          onClick={() => {
            window.open("http://naver.me/FZJrFjLz");
          }}
        >
          이벤트 응모하기
        </ApplyButton>
        <MainButton onClick={onLinkTo}>메인으로 돌아가기</MainButton>
      </ResultPage>
    </>
  );
};

const ApplyButton = styled.div`
  cursor: pointer;
  width: 50%;
  margin: auto;
  height: 3rem;
  margin-top: 2rem;
  text-align: center;
  border-radius: 10px;
  font-family: "AppleSDB";
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background-color: #0765cd;
`;

const ResultPage = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 3rem;
  background-color: #f2f0f0;
`;

const ResultWrapper = styled.div`
  background-color: #fff;
  margin: auto;
  width: 100%;
  height: fit-content;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 3rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;
const MainButton = styled.div`
  cursor: pointer;
  width: 50%;
  margin: auto;
  height: 3rem;
  margin-top: 1rem;
  margin-bottom: 4rem;

  text-align: center;
  border-radius: 10px;
  font-family: "AppleSDB";
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  background-color: #0765cd;
`;

export default Page;
