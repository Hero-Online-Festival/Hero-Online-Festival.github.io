import { Global, css } from "@emotion/react";
import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  RouteProps,
  useLocation,
} from "react-router-dom";
import { LandingPage } from "../page/Landing";
import { MainPage } from "../page/Main";
import { MBTIPage, MBTIResultPage } from "../page/MBTI";
import { TrendPage, TrendResultPage } from "../page/Trend";
import "../style/font/font.css";

const GlobalCSS = css`
  body {
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
        <Route exact path="/mbti/:idx" component={MBTIPage} />
        <Route exact path="/result/mbti" component={MBTIResultPage} />
        <Route exact path="/trend/:idx" component={TrendPage} />
        <Route exact path="/result/trend" component={TrendResultPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
