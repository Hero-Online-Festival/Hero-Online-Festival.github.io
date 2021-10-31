import React, { useState } from "react";
import styled from "@emotion/styled";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { useCallback } from "react";
import { Header } from "../../../components/Main";
import { Mentor } from "../../../common/Mentor";
import { Question } from "../../../components/MBTI/Question";
import Home from "../../../style/image/home.png";

type TParams = { id: string };

interface IHome {
  url: string;
}

const Page = ({ match }: RouteComponentProps<TParams>): React.ReactElement => {
  const id: number = Number(match.params.id);
  const [index, setIndex] = useState(0);
  console.log(index);
  const history = useHistory();
  const onLink = useCallback(
    (link: string) => {
      history.replace(link);
    },
    [history]
  );

  const onNext = useCallback(() => {
    setIndex(index + 1);
  }, [index]);

  const onPrevious = useCallback(() => {
    setIndex(index - 1);
  }, [index]);

  const mentor = Mentor[id];

  const maxIndex = Mentor[id].content.length - 1;

  return (
    <>
      <AnswerPage>
        <Header />
        <AnswerWrapper>
          <QuestionText>
            {"Q" + `${index + 1}` + "."}
            <br />
            {mentor.content[index].question}
          </QuestionText>
          <AnswerText>{mentor.content[index].answer}</AnswerText>
        </AnswerWrapper>
        <ButtonWrapper>
          {index > 0 ? (
            <PreviousButton onClick={onPrevious}>이전</PreviousButton>
          ) : (
            <EmptyButton></EmptyButton>
          )}
          <HomeButton onClick={() => onLink("/mentor")} url={Home}></HomeButton>
          {index !== maxIndex ? (
            <NextButton onClick={onNext}>다음</NextButton>
          ) : (
            <EmptyButton></EmptyButton>
          )}
        </ButtonWrapper>
      </AnswerPage>
    </>
  );
};
export default Page;

const PreviousButton = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  width: 50px;
  height: 40px;
  background-color: #0765cd;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  border-radius: 10px;
  font-family: "AppleSDM";
`;

const HomeButton = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  width: 30px;
  height: 30px;

  background-size: cover;
  background-image: url(${(props: IHome) => props.url});
`;
const EmptyButton = styled.div`
  width: 50px;
  height: 40px;
`;

const NextButton = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  width: 50px;
  height: 40px;
  background-color: #0765cd;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
  border-radius: 10px;
  font-family: "AppleSDM";
`;

const ButtonWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin: auto;
  margin-top: 3rem;
  margin-bottom: 5rem;
`;

const QuestionText = styled.div`
  color: #000;
  font-size: 1rem;
  font-family: "AppleSDB";
  text-align: center;
  white-space: pre-line;
`;

const AnswerWrapper = styled.div`
  width: 90%;
  height: fit-content;
  padding: 10px;
  background-color: #fff;
  border-radius: 10px;
  margin: auto;
  margin-top: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "AppleSDB";
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding-bottom: 20px;
`;

const EventsWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 20px;
`;

const AnswerText = styled.div`
  color: #000;
  margin-top: 30px;
  font-size: 0.7rem;
  font-family: "AppleSDM";
  white-space: pre-line;
`;

const AnswerPage = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #f2f0f0;
  padding-bottom: 5rem;
`;
