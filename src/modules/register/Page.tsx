import * as React from "react";
import AuthBasedRedirect from "../me/AuthBasedRedirect";
import ConnectedRegisterForm from "./Connector";
import CenteredFormBoxLayout from "../../layouts/CenteredFormBoxLayout";
import FormBox from "../../elements/FormBox";
import FaceIcon from "@material-ui/icons/FaceOutlined";
// import SignInForm from "./Form";

class Page extends React.PureComponent {
  render() {
    return (
      <AuthBasedRedirect to="/u" invert={true}>
        <CenteredFormBoxLayout>
          <FormBox icon={<FaceIcon />} title="Create Account">
            <ConnectedRegisterForm />
          </FormBox>
        </CenteredFormBoxLayout>
      </AuthBasedRedirect>
    );
  }
}

export default Page;
