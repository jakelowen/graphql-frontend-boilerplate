import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import SignInForm, { LoginFormValues } from "./Form";
import { withRouter, RouteComponentProps } from "react-router-dom";

import RESEND_CONFIRMATION_EMAIL from "./resendConfirmationEmailMutation";
import {
  resendConfirmationEmail,
  resendConfirmationEmailVariables
} from "./__generated__/resendConfirmationEmail";
import { StaticContext } from "../../../node_modules/@types/react-router";

class ResendConfirmationEmailMutation extends Mutation<
  resendConfirmationEmail,
  resendConfirmationEmailVariables
> {}

interface Props extends RouteComponentProps<any, StaticContext, any> {}

export class Connector extends React.Component<Props> {
  onSubmit = (
    mutation: MutationFn<
      resendConfirmationEmail,
      resendConfirmationEmailVariables
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
      <ResendConfirmationEmailMutation
        mutation={RESEND_CONFIRMATION_EMAIL}
        onError={error => console.log(error)}
      >
        {(mutation, { data }) => {
          const errors =
            data &&
            data.resendConfirmationEmail &&
            data.resendConfirmationEmail.error;
          return (
            <SignInForm
              data={data}
              onSubmit={values => this.onSubmit(mutation, values)}
              errors={errors}
            />
          );
        }}
      </ResendConfirmationEmailMutation>
    );
  }
}

export default withRouter(Connector);
