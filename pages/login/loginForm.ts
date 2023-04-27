import { formControlCreator } from "../../src/util/formControll";
import { isValueEmpty } from "../../src/util/validators";

export const loginForm = formControlCreator([
  { name: "usernameInput", value: "", validators: [isValueEmpty] },
  { name: "passwordInput", value: "", validators: [isValueEmpty] },
]);
