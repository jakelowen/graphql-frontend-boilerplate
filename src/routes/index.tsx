import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import RegisterPage from "../modules/register/Page";
import LogInPage from "../modules/login/Page";
import ForgotPasswordPage from "../modules/forgotPassword/Page";
import ResendEmailConfirmationPage from "../modules/resendConfirmationEmail/Page";
import ForgotPasswordChangePage from "../modules/forgotPasswordChange/Page";
import AuthedIndexPage from "../modules/authedIndex/Page";
import IndexPage from "../modules/index/Page";
import SettingsPage from "../modules/settings/Page";
import FourOhFour from "./FourOhFour";

export const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={IndexPage} />
      <Route exact={true} path="/u" component={AuthedIndexPage} />
      <Route exact={true} path="/u/settings" component={SettingsPage} />
      <Route exact={true} path="/login" component={LogInPage} />
      <Route exact={true} path="/register" component={RegisterPage} />
      <Route
        exact={true}
        path="/forgot-password"
        component={ForgotPasswordPage}
      />
      <Route
        exact={true}
        path="/request-confirmation"
        component={ResendEmailConfirmationPage}
      />
      <Route
        exact={true}
        path="/change-password/:token"
        component={ForgotPasswordChangePage}
      />
      <Route component={FourOhFour} />
    </Switch>
  </BrowserRouter>
);
