import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { MBTI } from "../../common/Selections";
interface ISelection {
  idx: number;
}

export const Selections = ({ idx }: ISelection): React.ReactElement => {
  const route = idx === 12 ? `/mbti/result` : `/mbti/${idx + 1}`;

  return (
    <>
      <SelectionsWrapper>
        <Link to={route} style={{ textDecoration: "none" }}>
          <Selection>{MBTI[idx].selectionOne}</Selection>
        </Link>
        <Link to={route} style={{ textDecoration: "none" }}>
          <Selection>{MBTI[idx].selectionTwo}</Selection>
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
