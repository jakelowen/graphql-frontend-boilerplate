/* tslint:disable */
// This file was automatically generated and should not be edited.

import { loginInput } from "../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: login
// ====================================================

export interface login_login_error {
  path: string;
  message: string;
}

export interface login_login {
  /**
   * if present the auth token
   */
  login: string | null;
  error: login_login_error[] | null;
}

export interface login {
  login: login_login | null;
}

export interface loginVariables {
  input: loginInput;
}
