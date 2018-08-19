import gql from "graphql-tag";

export default gql`
  mutation register($input: registerInput!) {
    register(input: $input) {
      register
      error {
        path
        message
      }
    }
  }
`;
