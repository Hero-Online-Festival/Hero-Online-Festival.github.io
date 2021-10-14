import { Global, css } from "@emotion/react";
import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import { LandingPage } from "../page/Landing";
import { MainPage } from "../page/Main";
import "../style/font/font.css";

const GlobalCSS = css`
  body {
    position: fixed;
    overflow: hidden;
    width: 100%;
    height: 100vh;
    margin: auto;
    background-color: #eaeaea;
  }
`;

const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Global styles={GlobalCSS} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
