/* tslint:disable */
// This file was automatically generated and should not be edited.

import { forgotPasswordChangeInput } from "../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: forgotPasswordChange
// ====================================================

export interface forgotPasswordChange_forgotPasswordChange_error {
  path: string;
  message: string;
}

export interface forgotPasswordChange_forgotPasswordChange {
  forgotPasswordChange: boolean | null;
  error: forgotPasswordChange_forgotPasswordChange_error[] | null;
}

export interface forgotPasswordChange {
  forgotPasswordChange: forgotPasswordChange_forgotPasswordChange;
}

export interface forgotPasswordChangeVariables {
  input: forgotPasswordChangeInput;
}
