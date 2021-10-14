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
