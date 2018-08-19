import * as React from "react";
import AuthBasedRedirect from "../me/AuthBasedRedirect";
import ConnectedLogInForm from "./Connector";
import CenteredFormBoxLayout from "../../layouts/CenteredFormBoxLayout";
import FormBox from "../../elements/FormBox";
import LockIcon from "@material-ui/icons/LockOutlined";
// import SignInForm from "./Form";

class Page extends React.PureComponent {
  render() {
    return (
      <AuthBasedRedirect to="/u" invert={true}>
        <CenteredFormBoxLayout>
          <FormBox icon={<LockIcon />} title="Sign in">
            <ConnectedLogInForm />
          </FormBox>
        </CenteredFormBoxLayout>
      </AuthBasedRedirect>
    );
  }
}

export default Page;
