import * as React from "react";
import TextField from "@material-ui/core/TextField";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import { FieldProps } from "formik";

const styles = ({  }: Theme) =>
  createStyles({
    textField: {
      // marginLeft: theme.spacing.unit,
      // marginRight: theme.spacing.unit
    }
  });

interface Props extends WithStyles<typeof styles>, FieldProps {}

const Input = (props: Props) => {
  const { classes, field, form, ...restProps } = props;
  return (
    <TextField
      id={field.name}
      error={form.touched[field.name] && form.errors[field.name] ? true : false}
      className={classes.textField}
      helperText={form.touched[field.name] && form.errors[field.name]}
      margin="normal"
      {...restProps}
      {...field}
    />
  );
};

export default withStyles(styles)(Input);
