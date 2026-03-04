import {
  checkEmail,
  checkMessage,
  checkName,
  checkSubject,
} from "./ValidationErrors";

describe("checkName", () => {
  it("returns error if the name is empty", () => {
    const result = checkName("");

    expect(result).toEqual(["Name is required"]);
  });

  it("returns error when name contains only spaces", () => {
    const result = checkName("    ");

    expect(result).toEqual(["Name is required"]);
  });

  it("returns empty array when name is valid", () => {
    const result = checkName("Radu");

    expect(result).toEqual([]);
  });
});

describe("checkEmail", () => {
  it("returns error if the email is empty", () => {
    const result = checkEmail("");

    expect(result).toEqual(["Email is required"]);
  });

  it("returns error when email contains only spaces", () => {
    const result = checkEmail("    ");

    expect(result).toEqual(["Email is required"]);
  });

  it("returns error when email is not valid", () => {
    const result = checkEmail("radu@test");

    expect(result).toEqual(["Please enter a valid email address"]);
  });

  it("returns empty array when email is valid", () => {
    const result = checkEmail("radu@example.com");

    expect(result).toEqual([]);
  });
});

describe("checkSubject", () => {
  it("returns error if the subject is empty", () => {
    const result = checkSubject("");

    expect(result).toEqual(["Subject is required"]);
  });

  it("returns error when subject contains only spaces", () => {
    const result = checkSubject("    ");

    expect(result).toEqual(["Subject is required"]);
  });

  it("returns empty array when subject is valid", () => {
    const result = checkSubject("About programming");

    expect(result).toEqual([]);
  });
});

describe("checkMessage", () => {
  it("returns error if the message is empty", () => {
    const result = checkMessage("");

    expect(result).toEqual(["Message is required"]);
  });

  it("returns error when message contains only spaces", () => {
    const result = checkMessage("    ");

    expect(result).toEqual(["Message is required"]);
  });

  it("returns empty array when subject is valid", () => {
    const result = checkMessage("Despre programare");

    expect(result).toEqual([]);
  });
});
