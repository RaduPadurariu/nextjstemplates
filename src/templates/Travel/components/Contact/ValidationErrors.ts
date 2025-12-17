export function checkName(name: string) {
  const errors = [];

  if (name.length === 0) {
    errors.push("Name is required");
  }

  return errors;
}

export function checkEmail(email: string) {
  const errors = [];

  if (email.length === 0) {
    errors.push("Email is required");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.push("Please enter a valid email address.");
    }
  }

  return errors;
}

export function checkSubject(subject: string) {
  const errors = [];

  if (subject.length === 0) {
    errors.push("Subject is required");
  }

  return errors;
}

export function checkMessage(message: string) {
  const errors = [];

  if (message.length === 0) {
    errors.push("Message is required");
  }

  return errors;
}
