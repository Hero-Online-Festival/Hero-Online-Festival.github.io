import React from "react";
import styled from "@emotion/styled";
import { Header } from "../../components/Header";

const Main = (): React.ReactElement => {
  return (
    <>
      <MainPage>
        <Header />
      </MainPage>
    </>
  );
};

const MainPage = styled.div`
  max-width: 720px;
  height: 100vh;
  margin: auto;
`;

export default Main;
