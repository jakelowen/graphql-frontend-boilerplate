import * as React from "react";
import Dashboard from "../../layouts/DashBoard";
import {
  withStyles,
  WithStyles,
  createStyles,
  Theme
} from "@material-ui/core/styles";
import AuthBasedRedirect from "../me/AuthBasedRedirect";
import FormBox from "../../elements/FormBox";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import Grid from "@material-ui/core/Grid";
import FaceIcon from "@material-ui/icons/FaceOutlined";
import UpdateProfileConnectedForm from "./updateProfile/Connector";
import ChangePasswordConnectedForm from "./changePassword/Connector";

interface Props extends WithStyles<typeof styles> {}

// interface State {}

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

class AuthedIndex extends React.Component<Props> {
  render() {
    return (
      <AuthBasedRedirect to="/login" invert={false}>
        <Dashboard>
          <Grid container={true} spacing={24}>
            <Grid item={true} xs={6}>
              <FormBox icon={<FaceIcon />} title="Update Profile">
                <UpdateProfileConnectedForm />
              </FormBox>
            </Grid>
            <Grid item={true} xs={6}>
              <FormBox icon={<EmailIcon />} title="Change Password">
                <ChangePasswordConnectedForm />
              </FormBox>
            </Grid>
          </Grid>
        </Dashboard>
      </AuthBasedRedirect>
    );
  }
}

export default withStyles(styles)(AuthedIndex);
