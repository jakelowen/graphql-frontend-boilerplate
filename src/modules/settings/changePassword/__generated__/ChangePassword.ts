/* tslint:disable */
// This file was automatically generated and should not be edited.

import { changePasswordInput } from "../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: ChangePassword
// ====================================================

export interface ChangePassword_changePassword_error {
  path: string;
  message: string;
}

export interface ChangePassword_changePassword {
  error: ChangePassword_changePassword_error[] | null;
  changePassword: boolean | null;
}

export interface ChangePassword {
  changePassword: ChangePassword_changePassword;
}

export interface ChangePasswordVariables {
  input: changePasswordInput;
}
