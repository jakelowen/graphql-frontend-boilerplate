import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import SignInForm, { LoginFormValues } from "./Form";
import { withRouter, RouteComponentProps } from "react-router-dom";

import SEND_FORGOT_PASSWORD_EMAIL from "./sendForgotPasswordEmailMutation";
import {
  sendForgotPasswordEmail,
  sendForgotPasswordEmailVariables
} from "./__generated__/sendForgotPasswordEmail";
import { StaticContext } from "../../../node_modules/@types/react-router";

class SendForgotPasswordEmailMutation extends Mutation<
  sendForgotPasswordEmail,
  sendForgotPasswordEmailVariables
> {}

interface Props extends RouteComponentProps<any, StaticContext, any> {}

export class Connector extends React.Component<Props> {
  onSubmit = (
    mutation: MutationFn<
      sendForgotPasswordEmail,
      sendForgotPasswordEmailVariables
    >,
    values: LoginFormValues
  ) => {
    mutation({
      variables: {
        input: {
          email: values.email
        }
      }
    });
  };
  render() {
    return (
      <SendForgotPasswordEmailMutation
        mutation={SEND_FORGOT_PASSWORD_EMAIL}
        onError={error => console.log(error)}
      >
        {(mutation, { data }) => {
          return (
            <SignInForm
              data={data}
              onSubmit={values => this.onSubmit(mutation, values)}
            />
          );
        }}
      </SendForgotPasswordEmailMutation>
    );
  }
}

export default withRouter(Connector);
