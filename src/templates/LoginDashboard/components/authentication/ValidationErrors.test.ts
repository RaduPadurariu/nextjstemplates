import {
  checkConfirmPasswordSignUp,
  checkEmailSignIn,
  checkEmailSignUp,
  checkPasswordSignIn,
  checkPasswordSignUp,
  checkTermsSignUp,
  checkUsernameSignUp,
} from "./ValidationErrors";

// Sign Up
describe("checkUsernameSignUp", () => {
  it("returns error if the username is empty", () => {
    const result = checkUsernameSignUp("");

    expect(result).toEqual(["Username is required"]);
  });

  it("returns error when username contains only spaces", () => {
    const result = checkUsernameSignUp("    ");

    expect(result).toEqual(["Username is required"]);
  });

  it("returns empty array when username is valid", () => {
    const result = checkUsernameSignUp("Radu");

    expect(result).toEqual([]);
  });
});

describe("checkEmailSignUp", () => {
  it("returns error if the email is empty", () => {
    const result = checkEmailSignUp("");

    expect(result).toEqual(["Email is required"]);
  });

  it("returns error when email contains only spaces", () => {
    const result = checkEmailSignUp("    ");

    expect(result).toEqual(["Email is required"]);
  });

  it("returns error when email is not valid", () => {
    const result = checkEmailSignUp("radu@test");

    expect(result).toEqual(["Please enter a valid email address"]);
  });

  it("returns empty array when email is valid", () => {
    const result = checkEmailSignUp("radu@example.com");

    expect(result).toEqual([]);
  });
});

describe("checkPasswordSignUp", () => {
  it("returns error if password is empty", () => {
    const result = checkPasswordSignUp("");

    expect(result.length).toBeGreaterThan(0);
  });

  it("returns error if missing uppercase", () => {
    const result = checkPasswordSignUp("password1");

    expect(result.length).toBeGreaterThan(0);
  });

  it("returns error if missing number", () => {
    const result = checkPasswordSignUp("Password");

    expect(result.length).toBeGreaterThan(0);
  });

  it("returns empty array when password is valid", () => {
    const result = checkPasswordSignUp("Password1");

    expect(result).toEqual([]);
  });
});

describe("checkConfirmPasswordSignUp", () => {
  it("returns error if password and confirm password does not match", () => {
    const result = checkConfirmPasswordSignUp("Password1", "password1");

    expect(result.length).toBeGreaterThan(0);
  });

  it("returns empty array when password and confirm password match", () => {
    const result = checkConfirmPasswordSignUp("Password1", "Password1");

    expect(result).toEqual([]);
  });
});

describe("checkTermsSignUp", () => {
  it("returns error if the terms are not accepted", () => {
    const result = checkTermsSignUp(false);

    expect(result.length).toBeGreaterThan(0);
  });

  it("returns empty array when terms are accepted", () => {
    const result = checkTermsSignUp(true);

    expect(result).toEqual([]);
  });
});

// Sign In

describe("checkEmailSignIn", () => {
  it("returns error if the email is empty", () => {
    const result = checkEmailSignIn("");

    expect(result).toEqual(["Email is required"]);
  });

  it("returns error when email contains only spaces", () => {
    const result = checkEmailSignIn("    ");

    expect(result).toEqual(["Email is required"]);
  });

  it("returns empty array when email is valid", () => {
    const result = checkEmailSignIn("radu@example.com");

    expect(result).toEqual([]);
  });
});

describe("checkPasswordSignIn", () => {
  it("returns error if password is empty", () => {
    const result = checkPasswordSignIn("");

    expect(result.length).toBeGreaterThan(0);
  });

  it("returns empty array when password is valid", () => {
    const result = checkPasswordSignIn("Password1");

    expect(result).toEqual([]);
  });
});
