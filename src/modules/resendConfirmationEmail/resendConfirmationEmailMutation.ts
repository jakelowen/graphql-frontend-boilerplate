import gql from "graphql-tag";

export default gql`
  mutation resendConfirmationEmail($input: resendConfirmationEmailInput!) {
    resendConfirmationEmail(input: $input) {
      error {
        path
        message
      }
      resendConfirmationEmail
    }
  }
`;
