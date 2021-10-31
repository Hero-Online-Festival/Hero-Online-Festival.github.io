import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { Header } from "../../components/Main";
import { RouteComponentProps, useHistory, useLocation } from "react-router-dom";
import { Detail } from "../../common/Detail";

type TParams = { id: string };

interface IImage {
  url: string;
}

const Page = ({ match }: RouteComponentProps<TParams>): React.ReactElement => {
  const history = useHistory();
  const location = useLocation();
  const isMentor = location.pathname.slice(7);
  const id: string = match.params.id;
  const onLinkTo = useCallback(
    (link: string) => {
      history.replace(`${link}`);
    },
    [history]
  );
  return (
    <>
      <DetailPage>
        <Header />
        <DetailWrapper>
          <PhaseText color={Detail[id].color}>HERO ONLINE FESTIVAL</PhaseText>
          <PhaseText color={Detail[id].color}>
            PHASE {Detail[id].phase}
          </PhaseText>
          <Title>{Detail[id].title}</Title>
          <SubTitle>{Detail[id].subTitle}</SubTitle>
          <DetailImage url={Detail[id].image} />
          <DetailText>{Detail[id].description}</DetailText>
        </DetailWrapper>
        <DetailButton
          onClick={() => {
            if (isMentor === "/mentor") {
              onLinkTo(isMentor);
              return;
            }
          }}
        >
          자세히 알아보기
        </DetailButton>
        <MainButton onClick={() => onLinkTo("/main")}>
          메인으로 돌아가기
        </MainButton>
      </DetailPage>
    </>
  );
};

const PhaseText = styled.div`
  width: fit-content;
  margin: auto;
  font-size: 1.3rem;
  font-family: "AppleSDB";
  box-shadow: inset 0 -11px 0 ${(props) => props.color};
`;

const DetailText = styled.div`
  width: 90%;
  margin: auto;
  white-space: pre-wrap;
  line-height: 1.2rem;
  margin-top: 1rem;
  font-family: "AppleSDM";
`;

const DetailButton = styled.div`
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

const DetailImage = styled.div`
  width: 200px;
  height: 200px;
  background-size: cover;
  background-image: url(${(props: IImage) => props.url});
  margin: auto;
  margin-top: 1rem;
`;

const Title = styled.div`
  text-align: center;
  font-size: 1.2rem;
  font-family: "AppleSDB";
  margin-top: 1rem;
`;

const SubTitle = styled.div`
  text-align: center;
  font-size: 0.8rem;
  font-family: "AppleSDB";
`;

const DetailPage = styled.div`
  width: 100%;
  height: fit-content;
  padding-bottom: 3rem;
  background-color: #f2f0f0;
`;

const DetailWrapper = styled.div`
  background-color: #fff;
  margin: auto;
  width: 65%;
  height: fit-content;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  margin-top: 3rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export default Page;
