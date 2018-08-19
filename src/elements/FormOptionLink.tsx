import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";

const styles = ({ spacing }: Theme) =>
  createStyles({
    button: {
      marginTop: spacing.unit * 3
    }
  });

interface Props extends WithStyles<typeof styles> {
  to: string;
  message: string;
  fullWidth: boolean;
}

const FormOptionLink = (props: Props) => (
  <Link to={props.to}>
    <Button className={props.classes.button} fullWidth={props.fullWidth}>
      {props.message}
    </Button>
  </Link>
);

export default withStyles(styles)(FormOptionLink);
