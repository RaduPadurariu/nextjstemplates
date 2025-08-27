"use client";
import { useReducer } from "react";

type State = {
  name: string;
  email: string;
  password: string;
  isAfterSubmit: boolean;
  terms: boolean;
  formError: string | null;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PASSWORD"; payload: string }
  | { type: "IS_AFTER_SUBMIT"; payload: boolean }
  | { type: "SET_TERMS"; payload: boolean }
  | { type: "SET_FORM_ERROR"; payload: string | null };

const initialState: State = {
  name: "",
  email: "",
  password: "",
  isAfterSubmit: false,
  terms: false,
  formError: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "IS_AFTER_SUBMIT":
      return { ...state, isAfterSubmit: action.payload };
    case "SET_TERMS":
      return { ...state, terms: action.payload };
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
