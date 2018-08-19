import gql from "graphql-tag";

export default gql`
  query Me {
    me {
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
  }
`;
