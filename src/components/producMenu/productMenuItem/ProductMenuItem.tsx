import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import { sidebarItems, items } from "../../../data/sidebarData/Sidebar";

interface componentProps {
  item: sidebarItems;
  setProductItem: Dispatch<SetStateAction<ReadonlyArray<items>>>;
}

const ProudctMenuItem = ({ item, setProductItem }: componentProps) => {
  return (
    <Link href={item.categoryName}>
      <a
        onMouseEnter={() => {
          setProductItem(item.productsInCategory?.length ? item.productsInCategory : []);
        }}
        className={`inline-flex items-center justify-between transition-all duration-300 ${
          item.exists ? "text-slate-700 dark:text-slate-400" : "text-slate-500"
        } ${item.exists ? "hover:text-rose-500" : "hover:text-pink-400"}  ${item.exists && "font-bold"} text-xl mb-10`}
      >
        <span className='inline-flex items-center'>
          {item.svg}
          <p className='ml-5'>{item.categoryName}</p>
        </span>
        {item.exists && (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        )}
      </a>
    </Link>
  );
};

export default ProudctMenuItem;
