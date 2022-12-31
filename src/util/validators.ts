interface validatorsValue {
  isValid: boolean;
  invalidMessage: string;
}

export type validatorsType = (value: string) => validatorsValue;

export type passwordsChecker = (password: string, checkPassWord: string) => boolean;

export const isValidEmail: validatorsType = email => {
  let invalidMessage: string;
  let isValid: boolean;
  if (!/\S+@\S+\.\S+/.test(email) || !email) {
    invalidMessage = "Please Chose a Valid Email";
    isValid = false;
  } else {
    invalidMessage = "";
    isValid = true;
  }
  return {
    invalidMessage,
    isValid,
  };
};

// this funcion checks is the phone number which is comes with parameter is valid or not
export const phoneValidator: validatorsType = phoneNumber => {
  let invalidMessage: string;
  let isValid: boolean = true;
  // if the phone number filed starts with 0 charecter
  // point:: zero (0) is a falsy value.
  if (phoneNumber.indexOf("0") === 0) {
    // if phoneNumber converts to number type the value turns to NaN
    if (isNaN(+phoneNumber)) {
      invalidMessage = "just numeric characters";
    } else if (phoneNumber.length > 11) {
      invalidMessage = "phone number is long";
      isValid = false;
    } else {
      invalidMessage = "";
      isValid = true;
    }
  } else if (phoneNumber.indexOf("+") === 0) {
    // if the phoneNumber string from index 1 (secound charecter) value turns to NaN
    if (isNaN(+phoneNumber.slice(1, phoneNumber.length))) {
      invalidMessage = "just numeric characters";
      isValid = false;
    } else if (phoneNumber.length > 14) {
      invalidMessage = "phone number is long";
      isValid = false;
    } else {
      invalidMessage = "";
      isValid = true;
    }
  } else if (phoneNumber.indexOf("+") && isNaN(+phoneNumber)) {
    invalidMessage = "just numeric characters";
    isValid = false;
  } else {
    invalidMessage = "";
    isValid = true;
  }
  // after all this function returns this variables
  return { invalidMessage, isValid };
};

// this function checks if the password and confirm password in equel returns true if it is not return false
export const arePasswordsEqual: passwordsChecker = (password, checkPassWord) => {
  if (password === checkPassWord) {
    return true;
  }
  return false;
};
