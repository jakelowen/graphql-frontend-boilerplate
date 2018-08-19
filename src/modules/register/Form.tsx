import * as React from "react";
import { Formik, Field, Form } from "formik";
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
import { register, register_register_error } from "./__generated__/register";
import FormOptionLink from "../../elements/FormOptionLink";

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

export interface RegisterFormValues {
  email: string;
  password: string;
}

interface Props extends WithStyles<typeof styles> {
  onSubmit: (values: RegisterFormValues) => void;
  data: register | undefined;
  errors: register_register_error[] | undefined | null;
}

class SignInForm extends React.PureComponent<Props> {
  render() {
    const { classes, onSubmit, errors, data } = this.props;

    const showSuccess =
      data && data.register && data.register.error === null ? (
        <Alert
          key="success-alert"
          variant="success"
          message="Success! Please login."
        />
      ) : null;

    const displayErrors =
      errors &&
      errors.map((error, idx) => (
        <Alert key={idx} variant="error" message={error.message} />
      ));

    return (
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        onSubmit={onSubmit}
        validationSchema={schema}
        render={() => (
          <Form>
            {displayErrors}
            {showSuccess}

            <Field
              type="email"
              name="email"
              placeholder="Email"
              label="Email"
              component={Input}
              fullWidth={true}
            />

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
              Register
            </Button>

            <div className={classes.otherLinks}>
              {/* Link to register */}
              <FormOptionLink
                to="/create-account"
                message="New? Create Account."
                fullWidth={true}
              />

              {/* Link to Forgot Pass */}
              <FormOptionLink
                to="/forgot-password"
                message="Forgot Password?"
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
        )}
      />
    );
  }
}

export default withStyles(styles)(SignInForm);
