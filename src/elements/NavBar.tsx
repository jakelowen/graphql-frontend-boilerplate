import * as React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
// import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
// import NotificationsIcon from "@material-ui/icons/Notifications";
import { drawerWidth } from "../layouts/DashBoard";
import classNames from "classnames";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { StaticContext } from "../../node_modules/@types/react-router";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import AuthMenu from "./AuthMenu";

const styles = (theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    toolbar: {
      paddingRight: 24 // keep right padding when drawer closed
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36
    },
    menuButtonHidden: {
      display: "none"
    },
    title: {
      flexGrow: 1
    }
  });

interface Props
  extends WithStyles<typeof styles>,
    RouteComponentProps<any, StaticContext, any> {
  handleDrawerOpen: () => void;
  drawerOpen: boolean;
}

class NavBar extends React.Component<Props> {
  render() {
    const { classes, drawerOpen, handleDrawerOpen } = this.props;

    return (
      <AppBar
        position="absolute"
        className={classNames(
          classes.appBar,
          drawerOpen && classes.appBarShift
        )}
      >
        <Toolbar disableGutters={!drawerOpen} className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            onClick={handleDrawerOpen}
            className={classNames(
              classes.menuButton,
              drawerOpen && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="title"
            color="inherit"
            noWrap={true}
            className={classes.title}
          >
            Dashboard
          </Typography>

          <AuthMenu />
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(withRouter(NavBar));

{
  /* <IconButton color="inherit">
  <Badge badgeContent={4} color="secondary">
    <NotificationsIcon />
  </Badge>
</IconButton> */
}
