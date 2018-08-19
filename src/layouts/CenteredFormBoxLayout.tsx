import * as React from "react";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      paddingTop: theme.spacing.unit * 2
    },
    form: {
      marginTop: theme.spacing.unit,
      display: "block"
    },
    layout: {
      width: "auto",
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: "auto",
        marginRight: "auto"
      }
    }
  });

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode;
}

const CenteredFormBoxLayout = (props: Props) => (
  <React.Fragment>
    <CssBaseline />
    <main className={props.classes.layout}>{props.children}</main>
  </React.Fragment>
);
export default withStyles(styles)(CenteredFormBoxLayout);
