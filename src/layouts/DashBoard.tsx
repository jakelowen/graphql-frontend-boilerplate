import * as React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import NavBarToo from "../elements/NavBar";
import NavDrawer from "../elements/NavDrawer";

export const drawerWidth = 240;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      display: "flex"
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing.unit * 3,
      height: "100vh",
      overflow: "auto"
    }
  });

interface Props extends WithStyles<typeof styles> {}

interface State {
  open: boolean;
}

class Dashboard extends React.Component<Props, State> {
  state = {
    open: false
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <NavBarToo
            handleDrawerOpen={this.handleDrawerOpen}
            drawerOpen={this.state.open}
          />
          <NavDrawer
            open={this.state.open}
            handleDrawerClose={this.handleDrawerClose}
          />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            {this.props.children}
          </main>
        </div>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Dashboard);
