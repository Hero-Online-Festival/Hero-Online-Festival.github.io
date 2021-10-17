import React from "react";
import styled from "@emotion/styled";
import { Header, Events } from "../../components/Main";

const Page = (): React.ReactElement => {
  return (
    <>
      <MainPage>
        <Header />
        <MainWrapper>
          <MainText>이벤트</MainText>
          <EventsWrapper>
            <Events
              title="LCH"
              description="공대의 진짜 롤 챔피언은?"
              linkText="자세한 내용은 클릭"
            />
            <Events
              title="공대 가요제"
              description="공대 가왕은 누구?"
              linkText="자세한 내용은 클릭"
            />
            <Events
              title="히어로 게임"
              description="최후의 1인은 과연?"
              linkText="자세한 내용은 클릭"
            />
            <Events
              title="졸업생 & 현직자 멘토링"
              description="진로 고민 해결!!"
              linkText="자세한 내용은 클릭"
            />
            <Events
              title="이상형 학과 테스트"
              description="내 이상형은 어디에...?"
              linkText="테스트 하려면 클릭"
            />
            <Events
              title="내 안의 학번 테스트"
              description="내 진짜 학번은...?"
              linkText="테스트 하려면 클릭"
            />
          </EventsWrapper>
        </MainWrapper>
      </MainPage>
    </>
  );
};
const MainWrapper = styled.div`
  width: 85%;
  height: 100vh;
  margin: auto;
`;

const EventsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

const MainText = styled.div`
  color: #000;
  margin-top: 30px;
  font-size: 1.2rem;
  font-family: "AppleSDB";
`;

const MainPage = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f2f0f0;
`;
export default Page;
