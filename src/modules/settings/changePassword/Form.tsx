import * as React from "react";
import { Formik, Field, Form } from "formik";
import Input from "../../../elements/Input";
import Alert from "../../../elements/Alert";

import Button from "@material-ui/core/Button";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";

import schema from "./yupSchema";
import {
  ChangePassword,
  ChangePassword_changePassword_error
} from "./__generated__/ChangePassword";

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

export interface FormValues {
  currentPassword: string;
  newPassword: string;
}

interface Props extends WithStyles<typeof styles> {
  onSubmit: (values: FormValues) => void;
  data: ChangePassword | undefined;
  errors: ChangePassword_changePassword_error[] | null | undefined;
}

class ChangePassForm extends React.PureComponent<Props> {
  render() {
    const { classes, onSubmit, data, errors } = this.props;

    const showSuccess =
      data && data.changePassword && data.changePassword.changePassword ? (
        <Alert
          key="success-alert"
          variant="success"
          message="Success! Your password has been changed."
        />
      ) : null;

    const displayErrors =
      errors &&
      errors.map((error, idx) => (
        <Alert key={idx} variant="error" message={error.message} />
      ));

    return (
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: ""
        }}
        onSubmit={onSubmit}
        validationSchema={schema}
        render={() => {
          return (
            <Form>
              {showSuccess}
              {displayErrors}

              <Field
                type="password"
                name="currentPassword"
                placeholder="Current Password"
                label="Current Password"
                component={Input}
                fullWidth={true}
              />

              <Field
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                label="Confirm Password"
                component={Input}
                fullWidth={true}
              />

              <Field
                type="password"
                name="newPassword"
                placeholder="New Password"
                label="New Password"
                component={Input}
                fullWidth={true}
              />

              <Button
                type="submit"
                fullWidth={true}
                variant="raised"
                color="primary"
                className={classes.submit}
              >
                Change Password
              </Button>
            </Form>
          );
        }}
      />
    );
  }
}

export default withStyles(styles)(ChangePassForm);
