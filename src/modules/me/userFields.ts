import gql from "graphql-tag";

export default gql`
  fragment UserFields on User {
    id
    firstName
    lastName
    email
    permissions {
      id
      name
      team {
        id
        name
      }
    }
  }
`;
