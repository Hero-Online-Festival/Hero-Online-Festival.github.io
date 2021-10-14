import React from "react";
import styled from "@emotion/styled";
import { themeColor } from "../../common/palette";

export const Header = (): React.ReactElement => {
  return (
    <>
      <HeaderWrapper>
        <HeroText>HERO ONLINE FESTIVAL</HeroText>
      </HeaderWrapper>
    </>
  );
};

const HeaderWrapper = styled.div`
  width: 100%;
  height: 100px;
  background: linear-gradient(to right, #0064cc, #b57fdb);
  display: table;
`;

const HeroText = styled.div`
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  font-size: 1.6rem;
  color: #fff;
  font-family: "AppleSDB";
`;
