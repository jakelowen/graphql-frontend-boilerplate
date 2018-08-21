import gql from "graphql-tag";
import UserFields from "./userFields";

export default gql`
  query Me {
    me {
      ...UserFields
    }
  }
  ${UserFields}
`;
