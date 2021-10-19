import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { Trend } from "../../common/Selections";
import { useDispatch } from "react-redux";
import { updateTrendAnswer } from "../../stores/trend/trend";
interface ISelection {
  idx: number;
}

export const Selections = ({ idx }: ISelection): React.ReactElement => {
  const route = idx === 11 ? `/result/trend` : `/trend/${idx + 1}`;
  const dispatch = useDispatch();
  const onUpdateTrendAnswer = useCallback(
    (answer: number, idx: number) => {
      dispatch(updateTrendAnswer({ answer, questionIdx: idx }));
    },
    [dispatch]
  );
  return (
    <>
      <SelectionsWrapper>
        <Link to={route} style={{ textDecoration: "none" }}>
          <Selection onClick={() => onUpdateTrendAnswer(1, idx)}>
            {Trend[idx].selectionOne}
          </Selection>
        </Link>
        <Link to={route} style={{ textDecoration: "none" }}>
          <Selection onClick={() => onUpdateTrendAnswer(2, idx)}>
            {Trend[idx].selectionTwo}
          </Selection>
        </Link>
        <Link to={route} style={{ textDecoration: "none" }}>
          <Selection onClick={() => onUpdateTrendAnswer(3, idx)}>
            {Trend[idx].selectionThree}
          </Selection>
        </Link>
        <Link to={route} style={{ textDecoration: "none" }}>
          <Selection onClick={() => onUpdateTrendAnswer(4, idx)}>
            {Trend[idx].selectionFour}
          </Selection>
        </Link>
      </SelectionsWrapper>
    </>
  );
};

const SelectionsWrapper = styled.div`
  width: 100%;
  height: 60%;
  margin: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: "AppleSDB";
`;

const Selection = styled.div`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  color: #000;
  padding: 5px;
  cursor: pointer;
  height: 3rem;
  display: flex;
  flex-direction: column;
  white-space: pre-line;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
`;
