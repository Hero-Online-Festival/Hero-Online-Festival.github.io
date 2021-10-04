import React from "react";
import styled from "@emotion/styled";
import { themeColor } from "../common/palette";

export const Header = (): React.ReactElement => {
  return (
    <>
      <HeaderWrapper>
        <HeroText>히어로 온라인 페스티벌</HeroText>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 120px;
  background-color: ${themeColor.hero_blue};
  display: table;
`;

const HeroText = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 1.5rem;
  color: #fff;
`;
