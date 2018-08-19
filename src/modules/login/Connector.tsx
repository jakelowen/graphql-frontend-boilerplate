import * as React from "react";
import { Mutation, MutationFn, ApolloConsumer } from "react-apollo";
import SignInForm, { LoginFormValues } from "./Form";
import * as querystring from "querystring";
import { withRouter, RouteComponentProps } from "react-router-dom";
import LOG_IN from "./loginMutation";
import {
  login,
  loginVariables
  // login_login_error
} from "./__generated__/login";
import { StaticContext } from "../../../node_modules/@types/react-router";
import { setToken } from "../../utils/auth";
import { parseNextUrl } from "../../utils/nav";
import ME_QUERY from "../me/meQuery";

class LoginMutation extends Mutation<login, loginVariables> {}

interface Props extends RouteComponentProps<any, StaticContext, any> {}

export class SignInFormConnector extends React.Component<Props> {
  onSubmit = (
    mutation: MutationFn<login, loginVariables>,
    values: LoginFormValues
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
      <ApolloConsumer>
        {client => (
          <LoginMutation
            mutation={LOG_IN}
            onCompleted={({ login: response }) => {
              if (response && response.login) {
                const qs = querystring.parse(location.search.slice(1));
                setToken(response.login)
                  .then(() =>
                    client.query({
                      query: ME_QUERY,
                      fetchPolicy: "network-only"
                    })
                  )
                  .then(() => this.props.history.push(parseNextUrl(qs, "/u")));
              }
            }}
            onError={error => console.log(error)}
          >
            {(mutation, { data }) => {
              const errors = data && data.login && data.login.error;
              return (
                <SignInForm
                  data={data}
                  onSubmit={values => this.onSubmit(mutation, values)}
                  errors={errors}
                />
              );
            }}
          </LoginMutation>
        )}
      </ApolloConsumer>
    );
  }
}

export default withRouter(SignInFormConnector);
