import { Global, css } from "@emotion/react";
import React from "react";
import {
  BrowserRouter,
  HashRouter,
  Switch,
  Route,
  RouteProps,
  useLocation,
} from "react-router-dom";
import { DetailPage } from "../page/Detail";
import { LandingPage } from "../page/Landing";
import { MainPage } from "../page/Main";
import { MBTIPage, MBTIResultPage } from "../page/MBTI";
import { MentorPage, MentorAnswerPage } from "../page/Mentor";
import { TrendPage, TrendResultPage } from "../page/Trend";
import "../style/font/font.css";

const GlobalCSS = css`
  body {
    width: 100%;
    height: 100vh;
    margin: auto;
    background-color: #f2f0f0;
  }
`;

const Router = (): React.ReactElement => {
  return (
    <HashRouter>
      <Global styles={GlobalCSS} />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/main" component={MainPage} />
        <Route exact path="/mbti/:idx" component={MBTIPage} />
        <Route exact path="/result/mbti" component={MBTIResultPage} />
        <Route exact path="/trend/:idx" component={TrendPage} />
        <Route exact path="/result/trend" component={TrendResultPage} />
        <Route exact path="/detail/:id" component={DetailPage} />
        <Route exact path="/mentor" component={MentorPage} />
        <Route exact path="/mentor/answer/:id" component={MentorAnswerPage} />
      </Switch>
    </HashRouter>
  );
};

export default Router;
