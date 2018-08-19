import ME_QUERY from "./meQuery";
import { Query } from "react-apollo";
import * as React from "react";
import { Me } from "./__generated__/Me";
import { Redirect } from "react-router-dom";

class MeQuery extends Query<Me> {}

interface Props {
  to: string;
  children: React.ReactNode;
  invert: boolean;
}

class AuthBasedRedirect extends React.PureComponent<Props> {
  render() {
    const { to, children, invert } = this.props;
    return (
      <MeQuery query={ME_QUERY}>
        {({ loading, error, data }) => {
          if (loading) {
            return "Loading...";
          }
          if (error) {
            return `Error! ${error.message}`;
          }
          // not authed
          if (data && !data.me) {
            return invert ? children : <Redirect to={to} />;
          }

          // authed
          if (data && data.me) {
            return invert ? <Redirect to={to} /> : children;
          }

          return children;
        }}
      </MeQuery>
    );
  }
}

export default AuthBasedRedirect;
