import { NoParamReturnNumber } from "../typescript/types";

export const discountPercentHandler: NoParamReturnNumber = () => {
  let discountPercent: number = +(Math.random() * 100).toFixed();
  if (discountPercent > 70) {
    discountPercent = 0;
  }
  return discountPercent;
};
