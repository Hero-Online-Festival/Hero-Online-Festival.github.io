import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { Events, Header } from "../../components/Main";
import { useHistory } from "react-router-dom";

const Page = (): React.ReactElement => {
  const history = useHistory();

  const onLinkTo = useCallback(() => {
    history.replace("/main");
  }, [history]);

  return (
    <>
      <MentorPage>
        <Header />
        <MentorWrapper>
          <MentorText>졸업자 및 현직자 멘토링</MentorText>
          <EventsWrapper>
            <Events
              title="현대모비스"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="0"
            />
            <Events
              title="라인플러스"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="1"
            />
            <Events
              title="삼성SDI"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="2"
            />
            <Events
              title="삼성LSI"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="3"
            />
            <Events
              title="도로교통공단"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="4"
            />
            <Events
              title="지역난방공사"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="5"
            />
            <Events
              title="한국도로공사"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="6"
            />
            <Events
              title="한국석유공사"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="7"
            />
            <Events
              title="한국전력공사"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="8"
            />
            <Events
              title="NC소프트"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="9"
            />
            <Events
              title="토스"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="11"
            />
            <Events
              title="KT&G"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="10"
            />
          </EventsWrapper>
        </MentorWrapper>
        <MainButton onClick={onLinkTo}>메인으로 돌아가기</MainButton>
      </MentorPage>
    </>
  );
};

export default Page;

const MainButton = styled.div`
  cursor: pointer;
  width: 50%;
  margin: auto;
  height: 3rem;
  margin-top: 1.5rem;
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

const MentorPage = styled.div``;

const MentorWrapper = styled.div`
  width: 85%;
  height: fit-content;
  margin: auto;
`;

const EventsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

const MentorText = styled.div`
  color: #000;
  margin-top: 30px;
  font-size: 1.2rem;
  font-family: "AppleSDB";
`;
