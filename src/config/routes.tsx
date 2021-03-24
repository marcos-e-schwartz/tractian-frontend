import React, { useEffect } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import { Helmet } from "react-helmet";

import {
  Companies,
  CompanyLandingPage,
  Home
} from '../pages'

const bodyStyle: any = { style: "height: 100%; margin: 0;" };
const htmlStyle: any = { style: "height: 100%; margin: 0;" };

export const Routes = () => {

    return (
      <BrowserRouter>
        <Helmet bodyAttributes={bodyStyle} htmlAttributes={htmlStyle} />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/companies" component={Companies} />
            <Route exact path="/companies/:id" component={CompanyLandingPage} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
};
