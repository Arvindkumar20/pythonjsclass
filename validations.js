const emailValidation = (email) => {
  const regEx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regEx.test(email);
};

const phoneValidation = (phone) => {
  const regEx = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/; //+91 987 654 3210 //+910987654321 // 0987654321
  return regEx.test(phone);
};

const strongPassword = (password) => {
  const regEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])(?=.{8,}).*$/;
  return regEx.test(password);
};

/**
 * Validates DOB format, existence, and 18+ age requirement.
 * @param {string} dobStr - Date in YYYY-MM-DD format
 */
function validateDOB(dobStr) {
  // 1. Regex check: Ensures digits and hyphens are in the right place
  const regex = /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (!regex.test(dobStr)) {
    return { valid: false, message: "Use YYYY-MM-DD format." };
  }
  // 31/03/2026
  // 31-03-2026

  // 2. Logic check: Ensures the date actually exists (e.g., handles Leap Years)
  const [year, month, day] = dobStr.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return { valid: false, message: "This date does not exist." };
  }

  // 3. Age check: Verify if the user is 18 or older
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();

  // Adjust age if birthday hasn't occurred yet this year
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }

  if (date > today)
    return { valid: false, message: "Date cannot be in the future." };
  if (age < 18)
    return { valid: false, message: `Must be 18+. Current age: ${age}` };

  return { valid: true, age: age };
}

// Example usage:
// console.log(validateDOB("2026-03-29")); // { valid: true, age: 20 }
// console.log(validateDOB("1990-02-02")); // { valid: false, message: "This date does not exist." }

const salaryValidation = (salary) => {
  const regEx = /[0-9]/;
return regEx.test(salary);

};

