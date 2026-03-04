"use client";
import { useReducer } from "react";

type State = {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
  aboutMe: string;
};

type Action =
  | { type: "SET_FIRST_NAME"; payload: string }
  | { type: "SET_LAST_NAME"; payload: string }
  | { type: "SET_ADDRESS"; payload: string }
  | { type: "SET_CITY"; payload: string }
  | { type: "SET_COUNTRY"; payload: string }
  | { type: "SET_POSTAL_CODE"; payload: string }
  | { type: "SET_ABOUT_ME"; payload: string };

const initialState: State = {
  firstName: "",
  lastName: "",
  address: "",
  city: "",
  country: "",
  postalCode: "",
  aboutMe: "",
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_FIRST_NAME":
      return { ...state, firstName: action.payload };
    case "SET_LAST_NAME":
      return { ...state, lastName: action.payload };
    case "SET_ADDRESS":
      return { ...state, address: action.payload };
    case "SET_CITY":
      return { ...state, city: action.payload };
    case "SET_COUNTRY":
      return { ...state, country: action.payload };
    case "SET_POSTAL_CODE":
      return { ...state, postalCode: action.payload };
    case "SET_ABOUT_ME":
      return { ...state, aboutMe: action.payload };
    default:
      return state;
  }
}

export function useProfileUpdate() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return { state, dispatch };
}
