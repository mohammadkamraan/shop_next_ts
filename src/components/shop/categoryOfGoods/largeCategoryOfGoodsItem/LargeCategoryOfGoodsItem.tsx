import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

// typescript interfaces and (or) types
import { ICategoryOfGood } from "../../../../typescript/interfaces";
import type { tailwindBreakPoints } from "../../../../typescript/types";

import { firstLetterCapitalizer } from "../../../../util/firstLetterCapitalizer";
import Anchor from "../../../UI/anchor/Anchor";

interface IComponentProps {
  item: any | ICategoryOfGood;
}

const tailwindBreakPointsArray: tailwindBreakPoints[] = [
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
];

type ResponsiveGrid = (
  breakPoint: tailwindBreakPoints,
  diraction: "rows" | "couls"
) => string;
type SpecificProperty = (
  breakPoint: tailwindBreakPoints,
  diraction: "rows" | "couls"
) => keyof ICategoryOfGood | any;

const LargeCategoryOfGoodsItem: FC<IComponentProps> = ({ item }) => {
  const specificProperty: SpecificProperty = (breakPoint, diraction) => {
    return `grid${firstLetterCapitalizer(
      diraction
    )}ClassNameIn${firstLetterCapitalizer(breakPoint)}Mode`;
  };

  const responsiveGrid: ResponsiveGrid = (breakPoint, diraction) => {
    return ` ${breakPoint}:${
      item[specificProperty(breakPoint, diraction)]
    } ${breakPoint}:${item[`gridRowsClassNameIn2xlMode`]}`;
  };

  const responsiveGridForAllBreakePointsAndDiractions = () => {
    return `${tailwindBreakPointsArray.map(
      (tailwindBreakPoint: tailwindBreakPoints) => {
        return (
          responsiveGrid(tailwindBreakPoint, "couls") +
          responsiveGrid(tailwindBreakPoint, "rows")
        );
      }
    )}`;
  };

  return (
    <article
      className={`${item.backgroundColor} ${item.darkModeBackground} ${
        item.gridCoulsClassName
      } ${item.gridRowsClassName} ${item.flexDiracion} ${
        item.flexDiracion === "flex-col" ? "justify-center" : "justify-evenly"
      } ${responsiveGridForAllBreakePointsAndDiractions()} flex shadow-lg shadow-slate-400 dark:shadow-none rounded-md px-5 items-center `}
    >
      <div className={item.imageOrder === 1 ? "order-2" : ""}>
        <header>
          <h6 className='text-slate-800 dark:text-slate-300 text-3xl'>
            {item.cardHeader}
          </h6>
        </header>
        <p className='text-slate-700 dark:text-slate-200'>{item.paragraph}</p>
        <Link href={item.productsLink}>
          <Anchor
            isScaleAble
            styles='px-4 py-2 rounded-md inline-block mt-2 cursor-pointer'
          >
            see all products
          </Anchor>
        </Link>
      </div>
      <figure className={item.imageOrder === 1 ? "order-1" : ""}>
        <Image
          className='transition-all duration-300 hover:scale-90'
          width={item.image.imageWidth}
          height={item.image.imageHeight}
          src={item.image.imageAddress}
          alt={item.cardHeader}
        />
      </figure>
    </article>
  );
};

export default LargeCategoryOfGoodsItem;
