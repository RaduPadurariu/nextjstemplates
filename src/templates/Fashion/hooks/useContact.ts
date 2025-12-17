import { useReducer } from "react";

type State = {
  name: string;
  email: string;
  subject: string;
  message: string;
  isAfterSubmit: boolean;
  submitStatus: boolean;
  hasAcceptedTerms: boolean;
};

type Action =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_SUBJECT"; payload: string }
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "IS_AFTER_SUBMIT"; payload: boolean }
  | { type: "SUBMIT_STATUS"; payload: boolean }
  | { type: "HAS_ACCEPTED_TERMS"; payload: boolean };

const initialValue: State = {
  name: "",
  email: "",
  subject: "",
  message: "",
  isAfterSubmit: false,
  submitStatus: false,
  hasAcceptedTerms: false,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_SUBJECT":
      return { ...state, subject: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "IS_AFTER_SUBMIT":
      return { ...state, isAfterSubmit: action.payload };
    case "SUBMIT_STATUS":
      return { ...state, submitStatus: action.payload };
    case "HAS_ACCEPTED_TERMS":
      return { ...state, hasAcceptedTerms: action.payload };
    default:
      return state;
  }
}

export function useContact() {
  const [state, dispatch] = useReducer(reducer, initialValue);

  return { state, dispatch };
}
