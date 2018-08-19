/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Me
// ====================================================

export interface Me_me_permissions_team {
  id: string;
  name: string;
}

export interface Me_me_permissions {
  id: string;
  name: string;
  team: Me_me_permissions_team;
}

export interface Me_me {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  permissions: Me_me_permissions[] | null;
}

export interface Me {
  me: Me_me | null;
}
