import * as React from "react";
import { Mutation, MutationFn } from "react-apollo";
import UpdateProfileForm, { FormValues } from "./Form";

import CHANGE_PASSWORD_MUTATION from "./changePasswordMutation";
import {
  ChangePassword,
  ChangePasswordVariables
} from "./__generated__/ChangePassword";

class ChangePasswordMutation extends Mutation<
  ChangePassword,
  ChangePasswordVariables
> {}

// interface Props {}

export class Connector extends React.Component {
  onSubmit = (
    mutation: MutationFn<ChangePassword, ChangePasswordVariables>,
    values: FormValues
  ) => {
    mutation({
      variables: {
        input: {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword
        }
      }
    });
  };
  render() {
    return (
      <ChangePasswordMutation
        mutation={CHANGE_PASSWORD_MUTATION}
        onError={error => console.log(error)}
      >
        {(mutation, { data }) => {
          const errors =
            data && data.changePassword && data.changePassword.error;

          return (
            <UpdateProfileForm
              data={data}
              onSubmit={values => this.onSubmit(mutation, values)}
              errors={errors}
            />
          );
        }}
      </ChangePasswordMutation>
    );
  }
}

export default Connector;
