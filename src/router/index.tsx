import { Global, css } from "@emotion/react";
import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import { MainPage } from "../page/main";

// page

const PrivateRoute = (props: RouteProps) => {
  return <Route {...props} />;
};

const GlobalCSS = css`
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: #eaeaea;
  }
`;

const Router = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Global styles={GlobalCSS} />
      <Switch>
        <Route exact path="/" component={MainPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
