import React from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router";
import { toIdentifier } from "@babel/types";
import { useState } from "react";
import { HeroGameData } from "../../common/HeroGameData";
import { useCallback } from "react";

type HeroGameInput = {
  phoneNum: string;
  stdNum: string;
  name: string;
};

const initialInput: HeroGameInput = {
  phoneNum: "",
  stdNum: "",
  name: "",
};

const Page = (): React.ReactElement => {
  const history = useHistory();
  const [input, setInput] = useState<HeroGameInput>(initialInput);
  const [tab, setTab] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [result, setResult] = useState(0);
  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setInput((input) => ({ ...input, [name]: value }));
    },
    []
  );

  const onLinkToMain = useCallback(() => {
    history.replace("/main");
  }, [history]);

  const onNextStep = useCallback(() => {
    setTab(tab + 1);
  }, [tab]);

  const onCheck = (): boolean => {
    if (!HeroGameData[input.name]) {
      alert("이름을 다시 입력해주세요");
      window.location.reload();
      return false;
    }

    if (HeroGameData[input.name].phoneNum !== input.phoneNum) {
      alert("핸드폰번호를 다시 입력해주세요");
      window.location.reload();
      return false;
    }

    if (HeroGameData[input.name].stdNum !== Number(input.stdNum)) {
      alert(`학번을 다시 입력해주세요`);
      window.location.reload();
      return false;
    }
    return true;
  };

  const onResult = useCallback(() => {
    setResult(HeroGameData[input.name].idx);
    setTab(3);

    setIsCorrect(true);
  }, [tab, result, isCorrect]);
  console.log(input);
  console.log(Number(input.stdNum));
  console.log(HeroGameData[input.name]);
  return (
    <>
      <HeroGamePage>
        <HeaderWrapper>
          <TitleText>HERO ONLINE FESTIVAL</TitleText>
          <MainText>히어로 게임</MainText>
          <MainWrapper>
            {tab === 0 && (
              <>
                <NameText>이름을 입력하세요.</NameText>
                <NameInput
                  name="name"
                  value={input.name}
                  onChange={onChangeInput}
                />
                <NameButton onClick={onNextStep}>제출</NameButton>
              </>
            )}
            {tab === 1 && (
              <>
                <PhoneText>
                  전화번호를 입력하세요.
                  <br />
                  <br />
                  ex)01012345678
                </PhoneText>
                <PhoneNumInput
                  name="phoneNum"
                  value={input.phoneNum}
                  onChange={onChangeInput}
                />
                <PhoneNumButton onClick={onNextStep}>제출</PhoneNumButton>
              </>
            )}
            {tab === 2 && (
              <>
                <StdText>학번을 입력하세요.</StdText>
                <StdNumInput
                  name="stdNum"
                  value={input.stdNum}
                  onChange={onChangeInput}
                />
                <StdNumButton
                  onClick={() => {
                    if (!onCheck()) {
                      window.location.reload();
                      return;
                    }
                    onResult();
                  }}
                >
                  참가번호 확인하기
                </StdNumButton>
              </>
            )}
            {isCorrect && (
              <>
                <ResultText>당신의 참가번호는 {result}번입니다.</ResultText>
                <MainButton onClick={onLinkToMain}>
                  메인으로 돌아가기
                </MainButton>
              </>
            )}
          </MainWrapper>
        </HeaderWrapper>
      </HeroGamePage>
    </>
  );
};

export default Page;

const MainWrapper = styled.div`
  width: 50%;
  margin: auto;

  margin-top: 8rem;
`;

const MainButton = styled.div`
  text-align: center;

  background-color: #000;
  color: #fff;
  width: 40%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: auto;
  margin-top: 2rem;
  border-radius: 10px;
  font-size: 1.2rem;
`;

const ResultText = styled.div`
  text-align: center;
  color: #fff;
  font-family: "NixGon";
  font-size: 1.7rem;
`;

const StdNumInput = styled.input`
  width: 50%;
  height: 2rem;
  margin: auto;
  font-size: 1.2rem;
  outline: none;
  border-radius: 10px;
  display: block;
  margin-top: 2rem;
`;

const StdNumButton = styled.div`
  text-align: center;

  background-color: #000;
  color: #fff;
  width: 40%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: auto;
  margin-top: 2rem;
  border-radius: 10px;
  font-size: 1.2rem;
`;

const StdText = styled.div`
  text-align: center;
  color: #fff;
  font-family: "NixGon";
  font-size: 1.7rem;
`;

const PhoneNumInput = styled.input`
  width: 50%;
  height: 2rem;
  margin: auto;
  font-size: 1.2rem;
  outline: none;
  border-radius: 10px;
  display: block;
  margin-top: 1rem;
`;

const PhoneText = styled.div`
  text-align: center;
  color: #fff;
  font-family: "NixGon";
  font-size: 1.7rem;
`;

const NameInput = styled.input`
  width: 50%;
  height: 2rem;
  margin: auto;
  font-size: 1.2rem;
  outline: none;
  border-radius: 10px;
  display: block;
  margin-top: 2rem;
`;

const NameButton = styled.div`
  text-align: center;

  background-color: #000;
  color: #fff;
  width: 30%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: auto;
  margin-top: 2rem;
  border-radius: 10px;
  font-size: 1.2rem;
`;

const NameText = styled.div`
  text-align: center;
  color: #fff;
  font-family: "NixGon";
  font-size: 1.7rem;
`;

const PhoneNumButton = styled.div`
  text-align: center;

  background-color: #000;
  color: #fff;
  width: 30%;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin: auto;
  margin-top: 2rem;
  border-radius: 10px;
  font-size: 1.2rem;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  height: fit-content;
`;

const HeroGamePage = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(#020000, #b10000);
  padding-top: 1rem;
`;

const TitleText = styled.div`
  width: fit-content;
  margin: auto;
  color: #fff;
  word-space: 1rem;
  font-family: "NixGon";
`;

const MainText = styled.div`
  margin: auto;
  text-align: center;
  font-size: 3rem;
  background: linear-gradient(#b10000, #020000);
  width: fit-content;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: 10rem;
  font-family: "NixGon";
`;
