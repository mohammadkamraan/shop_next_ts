import { formControlCreator } from "../../util/formControll";
import { isValueEmpty } from "../../util/validators";

export const loginForm = formControlCreator([
  { name: "usernameInput", value: "", validators: [isValueEmpty] },
  { name: "passwordInput", value: "", validators: [isValueEmpty] },
]);
