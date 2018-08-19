import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import SignInForm, { FormValues } from "./Form";
import { withRouter, RouteComponentProps } from "react-router-dom";

import FORGOT_PASSWORD_CHANGE_MUTATION from "./forgotPasswordChangeMutation";
import {
  forgotPasswordChange,
  forgotPasswordChangeVariables
} from "./__generated__/forgotPasswordChange";
import { StaticContext } from "../../../node_modules/@types/react-router";

class SendForgotPasswordEmailMutation extends Mutation<
  forgotPasswordChange,
  forgotPasswordChangeVariables
> {}

interface Props extends RouteComponentProps<any, StaticContext, any> {}

export class Connector extends React.Component<Props> {
  onSubmit = (
    mutation: MutationFn<forgotPasswordChange, forgotPasswordChangeVariables>,
    values: FormValues
  ) => {
    mutation({
      variables: {
        input: {
          newPassword: values.password,
          key: this.props.match.params.token
        }
      }
    });
  };
  render() {
    return (
      <SendForgotPasswordEmailMutation
        mutation={FORGOT_PASSWORD_CHANGE_MUTATION}
        onError={error => console.log(error)}
      >
        {(mutation, { data }) => {
          const errors =
            data &&
            data.forgotPasswordChange &&
            data.forgotPasswordChange.error;

          return (
            <SignInForm
              data={data}
              onSubmit={values => this.onSubmit(mutation, values)}
              errors={errors}
            />
          );
        }}
      </SendForgotPasswordEmailMutation>
    );
  }
}

export default withRouter(Connector);
