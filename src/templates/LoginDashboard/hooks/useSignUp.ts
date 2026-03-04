"use client";
import { useReducer } from "react";

type State = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  isAfterSubmit: boolean;
  hasAcceptedTerms: boolean;
  formError: string | null;
};

type Action =
  | { type: "SET_USERNAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "SET_CONFIRM_PASSWORD"; payload: string }
  | { type: "IS_AFTER_SUBMIT"; payload: boolean }
  | { type: "HAS_ACCEPTED_TERMS"; payload: boolean }
  | { type: "SET_FORM_ERROR"; payload: string | null };

const initialState: State = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  isAfterSubmit: false,
  hasAcceptedTerms: false,
  formError: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_CONFIRM_PASSWORD":
      return { ...state, confirmPassword: action.payload };
    case "IS_AFTER_SUBMIT":
      return { ...state, isAfterSubmit: action.payload };
    case "HAS_ACCEPTED_TERMS":
      return { ...state, hasAcceptedTerms: action.payload };
    case "SET_FORM_ERROR":
      return { ...state, formError: action.payload };
    default:
      return state;
  }
}

export function useSignUp() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}
