export function checkName(name: string) {
  const errors = [];

  if (name.trim().length === 0) {
    errors.push("Name required.");
  }

  return errors;
}

export function checkEmail(email: string) {
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

export function checkSubject(subject: string) {
  const errors = [];

  if (subject.trim().length === 0) {
    errors.push("Subject required.");
  }

  return errors;
}

export function checkMessage(message: string) {
  const errors = [];

  if (message.trim().length === 0) {
    errors.push("Message required.");
  }

  return errors;
}

export function checkTerms(terms: boolean) {
  const errors = [];

  if (!terms) {
    errors.push("You must agree to the terms and conditions");
  }

  return errors;
}
