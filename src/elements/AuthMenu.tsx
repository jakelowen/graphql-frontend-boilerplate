import * as React from "react";
import { Query } from "react-apollo";
import { Me } from "../modules/me/__generated__/Me";
import ME_QUERY from "../modules/me/meQuery";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { StaticContext } from "../../node_modules/@types/react-router";
import { logout } from "../utils/auth";
import { ApolloClient } from "apollo-client";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";

const styles = (theme: Theme) => createStyles({});

interface Props
  extends WithStyles<typeof styles>,
    RouteComponentProps<any, StaticContext, any> {}

interface State {
  anchorEl: any;
}

class MeQuery extends Query<Me> {}

class AuthMenu extends React.PureComponent<Props, State> {
  state = {
    anchorEl: null
  };

  signout = (client: ApolloClient<any>) => {
    return logout()
      .then(() => client.resetStore())
      .then(() =>
        client.query({
          query: ME_QUERY,
          fetchPolicy: "network-only"
        })
      )
      .then(() => this.props.history.push("/login"));
  };

  handleMenu = (event: any) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const {} = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <MeQuery query={ME_QUERY}>
        {({ client, loading, error, data }) => {
          if (loading) {
            return "Loading...";
          }
          if (error) {
            return `Error! ${error.message}`;
          }

          return (
            <React.Fragment>
              {data &&
                data.me &&
                data.me.id && (
                  <div>
                    <IconButton // aria-owns={open ? "menu-appbar" : null}
                      aria-haspopup="true"
                      onClick={this.handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                    <Menu
                      id="menu-appbar"
                      anchorEl={anchorEl}
                      anchorOrigin={{ vertical: "top", horizontal: "right" }}
                      transformOrigin={{ vertical: "top", horizontal: "right" }}
                      open={open}
                      onClose={this.handleMenuClose}
                    >
                      <MenuItem
                        onClick={() => this.props.history.push("/u/settings")}
                      >
                        Settings
                      </MenuItem>
                      <MenuItem onClick={async () => this.signout(client)}>
                        Sign Out
                      </MenuItem>
                    </Menu>
                  </div>
                )}
            </React.Fragment>
          );
        }}
      </MeQuery>
    );
  }
}

export default withStyles(styles)(withRouter(AuthMenu));
