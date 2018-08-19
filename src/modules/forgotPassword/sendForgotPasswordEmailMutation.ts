import gql from "graphql-tag";

export default gql`
  mutation sendForgotPasswordEmail($input: sendForgotPasswordEmailInput!) {
    sendForgotPasswordEmail(input: $input) {
      sendForgotPasswordEmail
    }
  }
`;
