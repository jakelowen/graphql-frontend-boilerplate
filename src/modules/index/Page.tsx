import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
      maxWidth: 500
    }
  });

interface Props extends WithStyles<typeof styles> {}

const Index = (props: Props) => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="display3" gutterBottom={true}>
        This is an app.
      </Typography>
      <Typography gutterBottom={true}>
        This page will be the home page that describes the app. It will talk
        about features and encourage people to{" "}
        <Link to="/register">
          <a>register</a>
        </Link>{" "}
        or{" "}
        <Link to="/login">
          <a>login</a>
        </Link>
        .
      </Typography>
    </div>
  );
};

export default withStyles(styles)(Index);
