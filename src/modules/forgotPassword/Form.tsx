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
import { sendForgotPasswordEmail } from "./__generated__/sendForgotPasswordEmail";

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
  data: sendForgotPasswordEmail | undefined;
}

class SignInForm extends React.PureComponent<Props> {
  render() {
    const { classes, onSubmit, data } = this.props;

    const showSuccess =
      data &&
      data.sendForgotPasswordEmail &&
      data.sendForgotPasswordEmail.sendForgotPasswordEmail ? (
        <Alert
          key="success-alert"
          variant="success"
          message="Success! If a user exists with this email we have sent a
                      password reset message."
        />
      ) : null;

    return (
      <Formik
        initialValues={{ email: "" }}
        onSubmit={onSubmit}
        validationSchema={schema}
        render={() => {
          return (
            <Form>
              {showSuccess}

              <Field
                type="email"
                name="email"
                placeholder="Email"
                label="Email"
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
                Send Email
              </Button>

              <div className={classes.otherLinks}>
                {/* Link to register */}
                <FormOptionLink
                  to="/register"
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
