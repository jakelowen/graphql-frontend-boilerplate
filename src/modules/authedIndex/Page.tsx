import * as React from "react";
import Dashboard from "../../layouts/DashBoard";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import AuthBasedRedirect from "../me/AuthBasedRedirect";

interface Props extends WithStyles<typeof styles> {}

// interface State {}

const styles = ({ spacing }: Theme) =>
  createStyles({
    submit: {
      marginTop: spacing.unit * 3
    },
    otherLinks: {
      marginTop: spacing.unit * 3
    },
    button: {
      marginTop: spacing.unit * 3
    }
  });

class AuthedIndex extends React.Component<Props> {
  render() {
    return (
      <AuthBasedRedirect to="/login" invert={false}>
        <Dashboard>
          <p>stuff here</p>
        </Dashboard>
      </AuthBasedRedirect>
    );
  }
}

export default withStyles(styles)(AuthedIndex);
