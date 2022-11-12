import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { ICategoryOfGoodInSmallMode } from "../../../typescript/INterfaces";

interface ISmallCategoryOfGoodItem {
  category: ICategoryOfGoodInSmallMode;
}

const SmallCategoryOfGoodItem: FC<ISmallCategoryOfGoodItem> = ({ category }) => {
  const { categoryLink, categoryName, svg } = category;
  return (
    <Link href={categoryLink}>
      <a className='my-2'>
        <figure className='flex flex-col items-center text-center w-40 sm:w-52 text-slate-800 dark:text-slate-400'>
          <Image width={50} height={50} alt={categoryName} src={svg} />
          <figcaption className='text-sm md:text-base font-bold mt-2'>{categoryName}</figcaption>
        </figure>
      </a>
    </Link>
  );
};

export default SmallCategoryOfGoodItem;
