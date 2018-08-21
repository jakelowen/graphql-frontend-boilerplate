import * as React from "react";
import { Formik, Field, Form } from "formik";
// import FormOptionLink from "../../../elements/FormOptionLink";
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
  UpdateProfile,
  UpdateProfile_updateProfile_error
} from "./__generated__/UpdateProfile";

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
  firstName: string | undefined | null;
  lastName: string | undefined | null;
}

interface Props extends WithStyles<typeof styles> {
  onSubmit: (values: FormValues) => void;
  data: UpdateProfile | undefined;
  errors: UpdateProfile_updateProfile_error[] | null | undefined;
  prefill: FormValues;
}

class SignInForm extends React.PureComponent<Props> {
  render() {
    const { classes, onSubmit, data, errors, prefill } = this.props;

    const showSuccess =
      data && data.updateProfile && data.updateProfile.updateProfile ? (
        <Alert
          key="success-alert"
          variant="success"
          message="Success! Your profile has been updated."
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
          firstName: prefill.firstName,
          lastName: prefill.lastName
        }}
        onSubmit={onSubmit}
        validationSchema={schema}
        render={() => {
          return (
            <Form>
              {showSuccess}
              {displayErrors}

              <Field
                type="text"
                name="firstName"
                placeholder="First Name"
                label="First Name"
                component={Input}
                fullWidth={true}
              />

              <Field
                type="text"
                name="lastName"
                placeholder="Last Name"
                label="Last Name"
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
                Update Profile
              </Button>
            </Form>
          );
        }}
      />
    );
  }
}

export default withStyles(styles)(SignInForm);
