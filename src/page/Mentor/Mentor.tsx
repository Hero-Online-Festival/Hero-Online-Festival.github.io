import React from "react";
import styled from "@emotion/styled";
import { Events, Header } from "../../components/Main";

const Page = (): React.ReactElement => {
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
              idx="0"
            />
            <Events
              title="라인플러스"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="1"
              idx="0"
            />
            <Events
              title="삼성SDI"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="2"
              idx="0"
            />
            <Events
              title="삼성LSI"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="3"
              idx="0"
            />
            <Events
              title="도로교통공단"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="4"
              idx="0"
            />
            <Events
              title="지역난방공사"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="5"
              idx="0"
            />
            <Events
              title="한국도로공사"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="6"
              idx="0"
            />
            <Events
              title="한국석유공사"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="7"
              idx="0"
            />
            <Events
              title="한국전력공사"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="8"
              idx="0"
            />
            <Events
              title="NC소프트"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="9"
              idx="0"
            />{" "}
            <Events
              title="KT&G"
              description=""
              linkText="답변을 보고 싶다면...?"
              link="/mentor/answer"
              id="10"
              idx="0"
            />
          </EventsWrapper>
        </MentorWrapper>
      </MentorPage>
    </>
  );
};

export default Page;

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
