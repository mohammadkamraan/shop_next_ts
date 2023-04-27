import { FormControlState, FormControlAction } from "../typescript/Interfaces";
import { FormControlCreator } from "../typescript/types";

export const formControl = (
  state: FormControlState,
  action: FormControlAction
): FormControlState => {
  let isValid: boolean = true;
  if (action.name === "reset") {
    return { ...state.reset() };
  }
  if (state[action.name].validators?.length) {
    let isInputValid: boolean = false;
    let validation: any = null;
    for (let validator of state[action.name].validators as any[]) {
      validation = validator(action.value);
      isInputValid = validator(action.value).isValid;
      if (!validation.isValid) {
        break;
      }
    }
    for (let input in state) {
      if (!state[input].isValid && input !== "reset" && input !== "isValid") {
        isValid = false;
        break;
      }
    }
    return {
      ...state,
      [action.name]: {
        ...state[action.name],
        validation,
        value: action.value,
        isTouched: action.isTouched,
        isDirty: action.isDirty,
        isValid: isInputValid,
      },
      isValid,
    };
  }
  return {
    ...state,
    [action.name]: {
      ...state[action.name],
      value: action.value,
      isTouched: action.isTouched,
      isDirty: action.isDirty,
    },
  };
};

export const formControlCreator: FormControlCreator = inputs => {
  let form: FormControlState = {
    isValid: false,
    reset: null,
  };
  for (let input of inputs) {
    form[input.name] = {
      value: input.value,
      validators: input.validators,
      isDirty: false,
      isTouched: false,
      validation: null,
      isValid: input.validators?.length ? false : true,
    };
  }
  form.reset = function (formValue?: FormControlState): FormControlState {
    if (formValue) return formValue;
    return this;
  };
  return Object.assign({}, form);
};
