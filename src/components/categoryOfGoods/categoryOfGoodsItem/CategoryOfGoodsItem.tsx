import { FC } from "react";

// typescript interfaces and (or) types
import { ICategoryOfGood } from "../../../typescript/INterfaces";

import { firstLetterCapitalizer } from "../../../util/firstLetterCapitalizer";

interface IComponentProps {
  item: any | ICategoryOfGood;
}

type tailwindBreakPoints = "sm" | "md" | "lg" | "xl" | "2xl";

const tailwindBreakPointsArray: tailwindBreakPoints[] = ["sm", "md", "lg", "xl", "2xl"];

type ResponsiveGrid = (breakPoint: tailwindBreakPoints, diraction: "rows" | "couls") => string;
type SpecificProperty = (breakPoint: tailwindBreakPoints, diraction: "rows" | "couls") => keyof ICategoryOfGood | any;

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
    return `${tailwindBreakPointsArray.map((tailwindBreakPoint: tailwindBreakPoints) => {
      return responsiveGrid(tailwindBreakPoint, "couls") + responsiveGrid(tailwindBreakPoint, "rows");
    })}`;
  };

  return (
    <div
      className={`${responsiveGridForAllBreakePointsAndDiractions()} ${item.backgroundColor} ${item.flexDiracion} ${
        item.gridCoulsClassName
      } ${item.gridRowsClassName}`}
    >
      <h6>{item.cardHeader}</h6>
    </div>
  );
};

export default CategoryOfGoodsItem;
