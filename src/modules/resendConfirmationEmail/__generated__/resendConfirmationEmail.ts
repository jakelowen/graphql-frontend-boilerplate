/* tslint:disable */
// This file was automatically generated and should not be edited.

import { resendConfirmationEmailInput } from "../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: resendConfirmationEmail
// ====================================================

export interface resendConfirmationEmail_resendConfirmationEmail_error {
  path: string;
  message: string;
}

export interface resendConfirmationEmail_resendConfirmationEmail {
  error: resendConfirmationEmail_resendConfirmationEmail_error[] | null;
  resendConfirmationEmail: boolean | null;
}

export interface resendConfirmationEmail {
  resendConfirmationEmail: resendConfirmationEmail_resendConfirmationEmail;
}

export interface resendConfirmationEmailVariables {
  input: resendConfirmationEmailInput;
}
