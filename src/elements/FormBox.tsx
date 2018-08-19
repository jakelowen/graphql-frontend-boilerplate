import * as React from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
        .spacing.unit * 3}px`
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main
    },
    form: {
      marginTop: theme.spacing.unit
    },
    submit: {
      marginTop: theme.spacing.unit * 3
    }
  });

interface Props extends WithStyles<typeof styles> {
  children: React.ReactNode;
  icon: any;
  title: any;
}

function FormBox(props: Props) {
  const { classes, children, icon, title } = props;

  return (
    <Paper className={classes.paper}>
      <Avatar className={classes.avatar}>{icon}</Avatar>
      <Typography variant="headline">{title}</Typography>
      {children}
    </Paper>
  );
}

export default withStyles(styles)(FormBox);
