/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFields
// ====================================================

export interface UserFields_permissions_team {
  id: string;
  name: string;
}

export interface UserFields_permissions {
  id: string;
  name: string;
  team: UserFields_permissions_team;
}

export interface UserFields {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  permissions: UserFields_permissions[] | null;
}
