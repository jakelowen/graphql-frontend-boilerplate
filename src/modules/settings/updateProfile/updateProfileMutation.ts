import gql from "graphql-tag";
import UserFields from "../../me/userFields";

export default gql`
  mutation UpdateProfile($input: updateProfileInput!) {
    updateProfile(input: $input) {
      error {
        path
        message
      }
      updateProfile {
        ...UserFields
      }
    }
  }
  ${UserFields}
`;
