import gql from "graphql-tag";

export default gql`
  mutation forgotPasswordChange($input: forgotPasswordChangeInput!) {
    forgotPasswordChange(input: $input) {
      forgotPasswordChange
      error {
        path
        message
      }
    }
  }
`;
