interface validatorsValue {
  isValid: boolean;
  invalidMessage: string;
}

type validatorsType = (value: string) => validatorsValue;

let invalidMessage: string;
let isValid: boolean;
export const isValidEmail: validatorsType = email => {
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
