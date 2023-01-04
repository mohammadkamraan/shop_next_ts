import { useState } from "react";
import { items } from "../../../../data/sidebarData/Sidebar";
import ListCreator from "../../../listCreator/ListCreator";
import Product from "./product/Product";

interface componentProps {
  menuItem: items;
}
const SidebarMenuItem = ({ menuItem }: componentProps) => {
  // const [detail, setDetail] = useReducer((state: boolean) => {
  //   return !state;
  // }, false);

  const [detail, setDetail] = useState<boolean>(false);

  return (
    <li onClick={() => setDetail(!detail)} className='flex flex-col pt-5 px-6'>
      <button className='inline-flex items-center font-bold text-xl justify-between'>
        <p>{menuItem.itemName}</p>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={4}
          stroke='currentColor'
          className={`w-4 h-4 transition-all duration-700 ${detail && "rotate-90"}`}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
      </button>
      <div
        className={`overflow-hidden mt-4 border-l-4 border-slate-400  transition-all duration-700 ${
          detail ? "h-full" : "h-0"
        }`}
      >
        <div className='flex flex-col ml-8 text-xl'>
          <ListCreator itemPropsName='product' items={menuItem.products} itemComponent={Product} />
        </div>
      </div>
    </li>
  );
};

export default SidebarMenuItem;
