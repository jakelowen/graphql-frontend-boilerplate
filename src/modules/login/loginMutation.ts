import gql from "graphql-tag";

export default gql`
  mutation login($input: loginInput!) {
    login(input: $input) {
      login
      error {
        path
        message
      }
    }
  }
`;
