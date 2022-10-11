import { FC } from "react";

// typescript interfaces and (or) types
import { IGridSystemItem } from "../../../typescript/INterfaces";

import { firstLetterCapitalizer } from "../../../util/firstLetterCapitalizer";

interface IComponentProps {
  item: any | IGridSystemItem;
}

type tailwindBreakPoints = "sm" | "md" | "lg" | "xl" | "2xl";

const tailwindBreakPointsArray: tailwindBreakPoints[] = ["sm", "md", "lg", "xl", "2xl"];

let forLoopIndex: number = 0;

let tailwindBreakPoint: tailwindBreakPoints;

type ResponsiveGrid = (breakPoint: tailwindBreakPoints, diraction: "rows" | "couls") => string;
type SpecificProperty = (breakPoint: tailwindBreakPoints, diraction: "rows" | "couls") => keyof IGridSystemItem | any;

const CategoryOfGoodsItem: FC<IComponentProps> = ({ item }) => {
  const specificProperty: SpecificProperty = (breakPoint, diraction) => {
    return `grid${firstLetterCapitalizer(diraction)}ClassNameIn${firstLetterCapitalizer(breakPoint)}Mode`;
  };

  const responsiveGrid: ResponsiveGrid = (breakPoint, diraction) => {
    return ` ${breakPoint}:${item[specificProperty(breakPoint, diraction)]} ${breakPoint}:${
      item[`gridRowsClassNameIn2xlMode`]
    }`;
  };

  const responsiveGridForAllBreakePointsAndDiractions = () => {
    // for (forLoopIndex; forLoopIndex < tailwindBreakPointsArray.length; forLoopIndex++) {
    //   if (forLoopIndex < tailwindBreakPointsArray.length) {
    //     continue;
    //   }
    //   return (
    //     responsiveGrid(tailwindBreakPointsArray[forLoopIndex], "couls") +
    //     responsiveGrid(tailwindBreakPointsArray[forLoopIndex], "rows")
    //   );
    // }
  };

  return (
    <div
      className={`${tailwindBreakPointsArray.forEach(breakPoint => {
        return `${responsiveGrid(tailwindBreakPointsArray[forLoopIndex], "couls")}${responsiveGrid(
          tailwindBreakPoint,
          "rows"
        )}`;
      })}`}
    ></div>
  );
};

export default CategoryOfGoodsItem;
