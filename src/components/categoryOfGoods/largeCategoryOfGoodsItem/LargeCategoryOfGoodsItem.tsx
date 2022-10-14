import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

// typescript interfaces and (or) types
import { ICategoryOfGood } from "../../../typescript/INterfaces";
import type { tailwindBreakPoints } from "../../../typescript/types";

import { firstLetterCapitalizer } from "../../../util/firstLetterCapitalizer";

interface IComponentProps {
  item: any | ICategoryOfGood;
}

const tailwindBreakPointsArray: tailwindBreakPoints[] = ["sm", "md", "lg", "xl", "2xl"];

type ResponsiveGrid = (breakPoint: tailwindBreakPoints, diraction: "rows" | "couls") => string;
type SpecificProperty = (breakPoint: tailwindBreakPoints, diraction: "rows" | "couls") => keyof ICategoryOfGood | any;

const LargeCategoryOfGoodsItem: FC<IComponentProps> = ({ item }) => {
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
      className={`flex  ${item.flexDiracion} ${
        item.flexDiracion === "flex-col" ? "justify-center" : "justify-evenly"
      } shadow-lg shadow-slate-400 rounded-md justify-evenly px-5 items-center ${item.backgroundColor}  ${
        item.gridCoulsClassName
      } ${item.gridRowsClassName} ${responsiveGridForAllBreakePointsAndDiractions()}`}
    >
      <div className={item.imageOrder === 1 ? "order-2" : ""}>
        <h6 className='text-slate-800 text-3xl'>{item.cardHeader}</h6>
        <p className='text-slate-700'>{item.paragraph}</p>
        <Link href={item.productsLink}>
          <a className='bg-rose-700 px-4 py-2 rounded-md text-white inline-block transition-all duration-300 hover:scale-90 mt-2'>
            see all products
          </a>
        </Link>
      </div>
      <div className={item.imageOrder === 1 ? "order-1" : ""}>
        <Image
          className='transition-all duration-300 hover:scale-90'
          width={item.image.imageWidth}
          height={item.image.imageHeight}
          src={item.image.imageAddress}
          alt={item.cardHeader}
        />
      </div>
    </div>
  );
};

export default LargeCategoryOfGoodsItem;
