import * as React from "react";
import { Formik, Field, Form } from "formik";
import FormOptionLink from "../../elements/FormOptionLink";
import Input from "../../elements/Input";
import Alert from "../../elements/Alert";

import Button from "@material-ui/core/Button";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";

import schema from "./yupSchema";
import {
  forgotPasswordChange,
  forgotPasswordChange_forgotPasswordChange_error
} from "./__generated__/forgotPasswordChange";

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
  password: string;
}

interface Props extends WithStyles<typeof styles> {
  onSubmit: (values: FormValues) => void;
  data: forgotPasswordChange | undefined;
  errors: forgotPasswordChange_forgotPasswordChange_error[] | null | undefined;
}

class SignInForm extends React.PureComponent<Props> {
  render() {
    const { classes, onSubmit, data, errors } = this.props;

    const showSuccess =
      data &&
      data.forgotPasswordChange &&
      data.forgotPasswordChange.forgotPasswordChange ? (
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
        initialValues={{ password: "", confirmPassword: "" }}
        onSubmit={onSubmit}
        validationSchema={schema}
        render={() => {
          return (
            <Form>
              {showSuccess}
              {displayErrors}

              <Field
                type="password"
                name="password"
                placeholder="Password"
                label="Password"
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

              <Button
                type="submit"
                fullWidth={true}
                variant="raised"
                color="primary"
                className={classes.submit}
              >
                Change Password
              </Button>
              <div className={classes.otherLinks}>
                {/* Link to register */}
                <FormOptionLink
                  to="/create-account"
                  message="New? Create Account."
                  fullWidth={true}
                />

                {/* Link to Sign IN */}
                <FormOptionLink
                  to="/login"
                  message="Already have an account? Sign in."
                  fullWidth={true}
                />
              </div>
            </Form>
          );
        }}
      />
    );
  }
}

export default withStyles(styles)(SignInForm);
