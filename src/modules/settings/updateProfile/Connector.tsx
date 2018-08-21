import * as React from "react";
import { Mutation, MutationFn, Query } from "react-apollo";
import UpdateProfileForm, { FormValues } from "./Form";
import ME_QUERY from "../../me/meQuery";
import { Me } from "../../me/__generated__/Me";

import UPDATE_PROFILE_MUTATION from "./updateProfileMutation";
import {
  UpdateProfile,
  UpdateProfileVariables
} from "./__generated__/UpdateProfile";

class UpdateProfileMutation extends Mutation<
  UpdateProfile,
  UpdateProfileVariables
> {}

class MeQuery extends Query<Me> {}

// interface Props {}

export class Connector extends React.Component {
  onSubmit = (
    mutation: MutationFn<UpdateProfile, UpdateProfileVariables>,
    values: FormValues
  ) => {
    mutation({
      variables: {
        input: {
          firstName: values.firstName,
          lastName: values.lastName
        }
      }
    });
  };
  render() {
    return (
      <UpdateProfileMutation
        mutation={UPDATE_PROFILE_MUTATION}
        onError={error => console.log(error)}
      >
        {(mutation, { data }) => {
          const errors = data && data.updateProfile && data.updateProfile.error;

          return (
            <MeQuery query={ME_QUERY}>
              {({ loading, error, data: meData }) => {
                if (loading) {
                  return "Loading...";
                }
                if (error) {
                  return `Error! ${error.message}`;
                }
                const prefill =
                  meData && meData.me
                    ? {
                        firstName: meData.me.firstName,
                        lastName: meData.me.lastName
                      }
                    : { firstName: null, lastName: null };
                return (
                  <UpdateProfileForm
                    data={data}
                    prefill={prefill}
                    onSubmit={values => this.onSubmit(mutation, values)}
                    errors={errors}
                  />
                );
              }}
            </MeQuery>
          );
        }}
      </UpdateProfileMutation>
    );
  }
}

export default Connector;
