import * as React from "react";
import { Formik, Field, Form } from "formik";
import FormOptionLink from "../../elements/FormOptionLink";
import { find } from "lodash";
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
import { login, login_login_error } from "./__generated__/login";

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

export interface LoginFormValues {
  email: string;
  password: string;
}

interface Props extends WithStyles<typeof styles> {
  onSubmit: (values: LoginFormValues) => void;
  data: login | undefined;
  errors: login_login_error[] | undefined | null;
}

class SignInForm extends React.PureComponent<Props> {
  render() {
    const { classes, onSubmit, errors } = this.props;
    const showConfirm = find(errors, [
      "message",
      "please confirm your email"
    ]) ? (
      <FormOptionLink
        to="/request-confirmation"
        message="Request another confirmation email."
        fullWidth={true}
      />
    ) : null;
    const displayErrors =
      errors &&
      errors.map((error, idx) => (
        <Alert key={idx} variant="error" message={error.message} />
      ));
    return (
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={schema}
        render={() => (
          <Form>
            {displayErrors}

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
            <Button
              type="submit"
              fullWidth={true}
              variant="raised"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>

            <div className={classes.otherLinks}>
              {/* Link to register */}
              <FormOptionLink
                to="/register"
                message="New? Create Account."
                fullWidth={true}
              />

              {/* Link to Forgot Pass */}
              <FormOptionLink
                to="/forgot-password"
                message="Forgot Password?"
                fullWidth={true}
              />

              {/* Smart link to request confirmation */}
              {showConfirm}
            </div>
          </Form>
        )}
      />
    );
  }
}

export default withStyles(styles)(SignInForm);
