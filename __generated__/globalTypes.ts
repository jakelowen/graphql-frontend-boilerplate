/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface sendForgotPasswordEmailInput {
  email: string;
}

export interface forgotPasswordChangeInput {
  newPassword: string;
  key: string;
}

export interface loginInput {
  email: string;
  password: string;
}

export interface registerInput {
  email: string;
  password: string;
  firstName?: string | null;
  lastName?: string | null;
}

export interface resendConfirmationEmailInput {
  email: string;
}

export interface updateProfileInput {
  firstName?: string | null;
  lastName?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
