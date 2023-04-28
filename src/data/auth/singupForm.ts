import { FormControlState } from "../../typescript/AppInterfaces";
import { formControlCreator } from "../../util/formControll";
import {
  isValidEmail,
  isValueEmpty,
  phoneValidator,
} from "../../util/validators";

export const signupForm: FormControlState = formControlCreator([
  { value: "", validators: [isValidEmail], name: "emailInput" },
  { value: "", validators: [isValueEmpty], name: "username" },
  { value: "", validators: [phoneValidator], name: "phoneNumber" },
  { value: "", validators: [isValueEmpty], name: "passwordInput" },
  { value: "", validators: [isValueEmpty], name: "checkPassword" },
]);
