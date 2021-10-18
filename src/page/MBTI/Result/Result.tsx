import React from "react";
import styled from "@emotion/styled";
import { Header } from "../../../components/Main";

export const Page = (): React.ReactElement => {
  return (
    <>
      <ResultPage>
        <Header />
      </ResultPage>
    </>
  );
};

const ResultPage = styled.div``;

export default Page;
