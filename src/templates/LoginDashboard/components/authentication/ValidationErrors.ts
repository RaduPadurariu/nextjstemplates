// Sign Up

export function checkNameSignUp(name: string) {
  const errors = [];

  if (name.trim().length === 0) {
    errors.push("Name is required");
  }

  return errors;
}

export function checkEmailSignUp(email: string) {
  const errors: string[] = [];

  if (email.trim().length === 0) {
    errors.push("Email is required");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address");
    }
  }

  return errors;
}

export function checkPasswordSignUp(password: string) {
  const errors = [];

  if (
    password.length < 8 ||
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password)
  ) {
    errors.push(
      "At least 8 characters, with uppercase, lowercase and a number."
    );
  }

  return errors;
}

export function checkTermsSignUp(terms: boolean) {
  const errors = [];

  if (!terms) {
    errors.push("You must agree to the terms and conditions");
  }

  return errors;
}

export function checkFormErrorSignUp(formError: string | null) {
  const errors = [];

  if (formError) {
    errors.push("You must agree to the terms and conditions");
  }

  return errors;
}

// Sign In

export function checkEmailSignIn(email: string) {
  const errors: string[] = [];

  if (email.trim().length === 0) {
    errors.push("Email is required");
  }

  return errors;
}

export function checkPasswordSignIn(password: string) {
  const errors = [];

  if (password.length === 0) {
    errors.push("Password is required");
  }

  return errors;
}
