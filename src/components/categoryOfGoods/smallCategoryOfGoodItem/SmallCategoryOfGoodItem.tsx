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
        <div className='flex flex-col items-center text-center w-40 sm:w-52 text-slate-800'>
          <Image width={50} height={50} alt={categoryName} src={svg} />
          <h6 className='text-sm md:text-base font-bold mt-2'>{categoryName}</h6>
        </div>
      </a>
    </Link>
  );
};

export default SmallCategoryOfGoodItem;
