import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import SignInForm, { RegisterFormValues } from "./Form";
import { withRouter, RouteComponentProps } from "react-router-dom";

import REGISTER from "./registerMutation";
import {
  register,
  registerVariables
  // login_login_error
} from "./__generated__/register";
import { StaticContext } from "../../../node_modules/@types/react-router";

class RegisterMutation extends Mutation<register, registerVariables> {}

interface Props extends RouteComponentProps<any, StaticContext, any> {}

export class RegisterFormConnector extends React.Component<Props> {
  onSubmit = (
    mutation: MutationFn<register, registerVariables>,
    values: RegisterFormValues
  ) => {
    mutation({
      variables: {
        input: {
          email: values.email,
          password: values.password
        }
      }
    });
  };
  render() {
    return (
      <RegisterMutation
        mutation={REGISTER}
        onCompleted={({ register: response }) => {
          console.log("What do now? ", response);
          // if (response && response.register) {
          //   setToken(response.login);
          //   // redirect to next if present
          //   const qs = querystring.parse(location.search.slice(1));
          //   this.props.history.push(parseNextUrl(qs, "/"));
          // }
        }}
        onError={error => console.log(error)}
      >
        {(mutation, { data }) => {
          const errors = data && data.register && data.register.error;
          return (
            <SignInForm
              data={data}
              onSubmit={values => this.onSubmit(mutation, values)}
              errors={errors}
            />
          );
        }}
      </RegisterMutation>
    );
  }
}

export default withRouter(RegisterFormConnector);
