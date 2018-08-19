import * as React from "react";
import AuthBasedRedirect from "../me/AuthBasedRedirect";
import ConnectedRequestConfirmationEmailForm from "./Connector";
import CenteredFormBoxLayout from "../../layouts/CenteredFormBoxLayout";
import FormBox from "../../elements/FormBox";
import EmailIcon from "@material-ui/icons/EmailOutlined";
// import SignInForm from "./Form";

class Page extends React.PureComponent {
  render() {
    return (
      <AuthBasedRedirect to="/u" invert={true}>
        <CenteredFormBoxLayout>
          <FormBox icon={<EmailIcon />} title="Request Email Confirmation">
            <ConnectedRequestConfirmationEmailForm />
          </FormBox>
        </CenteredFormBoxLayout>
      </AuthBasedRedirect>
    );
  }
}

export default Page;
