/* tslint:disable */
// This file was automatically generated and should not be edited.

import { updateProfileInput } from "../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: UpdateProfile
// ====================================================

export interface UpdateProfile_updateProfile_error {
  path: string;
  message: string;
}

export interface UpdateProfile_updateProfile_updateProfile_permissions_team {
  id: string;
  name: string;
}

export interface UpdateProfile_updateProfile_updateProfile_permissions {
  id: string;
  name: string;
  team: UpdateProfile_updateProfile_updateProfile_permissions_team;
}

export interface UpdateProfile_updateProfile_updateProfile {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string;
  permissions: UpdateProfile_updateProfile_updateProfile_permissions[] | null;
}

export interface UpdateProfile_updateProfile {
  error: UpdateProfile_updateProfile_error[] | null;
  updateProfile: UpdateProfile_updateProfile_updateProfile | null;
}

export interface UpdateProfile {
  updateProfile: UpdateProfile_updateProfile;
}

export interface UpdateProfileVariables {
  input: updateProfileInput;
}
