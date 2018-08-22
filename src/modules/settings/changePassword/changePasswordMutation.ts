import gql from "graphql-tag";

export default gql`
  mutation ChangePassword($input: changePasswordInput!) {
    changePassword(input: $input) {
      error {
        path
        message
      }
      changePassword
    }
  }
`;
