import { NoParamReturnNumber } from "../typescript/types";

export const starsAmountHandler: NoParamReturnNumber = () => {
  let starsMount: number = +(Math.random() * 10).toFixed();
  if (starsMount > 5) {
    starsMount -= 5;
  }
  return starsMount;
};
