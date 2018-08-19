/* tslint:disable */
// This file was automatically generated and should not be edited.

import { registerInput } from "../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: register
// ====================================================

export interface register_register_error {
  path: string;
  message: string;
}

export interface register_register {
  register: string | null;
  error: register_register_error[] | null;
}

export interface register {
  register: register_register;
}

export interface registerVariables {
  input: registerInput;
}
