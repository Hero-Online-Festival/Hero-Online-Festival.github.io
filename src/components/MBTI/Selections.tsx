import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { MBTI } from "../../common/Selections";
import { useDispatch } from "react-redux";
import { updateMBTIAnswer } from "../../stores/mbti/mbti";

interface ISelection {
  idx: number;
}

export const Selections = ({ idx }: ISelection): React.ReactElement => {
  const route = idx === 11 ? `/result/mbti` : `/mbti/${idx + 1}`;
  const dispatch = useDispatch();
  const onUpdateMBTIAnswer = useCallback(
    (answer: number, idx: number) => {
      dispatch(updateMBTIAnswer({ answer, questionIdx: idx }));
    },
    [dispatch]
  );
  return (
    <>
      <SelectionsWrapper>
        <Link to={route} style={{ textDecoration: "none" }}>
          <Selection onClick={() => onUpdateMBTIAnswer(1, idx)}>
            {MBTI[idx].selectionOne}
          </Selection>
        </Link>
        <Link to={route} style={{ textDecoration: "none" }}>
          <Selection onClick={() => onUpdateMBTIAnswer(-1, idx)}>
            {MBTI[idx].selectionTwo}
          </Selection>
        </Link>
      </SelectionsWrapper>
    </>
  );
};

const SelectionsWrapper = styled.div`
  width: 100%;
  height: 40%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "AppleSDB";
`;

const Selection = styled.div`
  white-space: pre-line;
  width: 100%;
  padding: 5px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #000;
  cursor: pointer;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
`;
