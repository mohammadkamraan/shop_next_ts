import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { items } from "../../../../data/sidebarData/Sidebar";
import ListCreator from "../../../listCreator/ListCreator";
import SidebarMenuItem from "./sidebarMenuItem/SidebarMenuItem";

interface componentProps {
  // menuProducts: ReadonlyArray<items>;
  show: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
  menuItems: ReadonlyArray<items>;
}

const SidebarMenu = ({ show, setClose, menuItems }: componentProps) => {
  return (
    <aside
      className={`fixed top-0 h-screen w-5/6 bg-neutral-50 dark:bg-slate-900 z-[2] md:hidden transition-all duration-500 flex flex-col text-slate-700 dark:text-slate-300 ${
        show ? "" : "-translate-x-full"
      }`}
    >
      <header>
        <button
          onClick={() => setClose(false)}
          className='inline-flex items-center text-2xl py-4 px-6 font-bold'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'
            />
          </svg>
          <h6 className='ml-2'>Main menu</h6>
        </button>
      </header>
      <hr className='bg-neutral-600' />
      <Link href='/'>
        <a className='pt-5 px-6 inline-flex items-center justify-between font-bold text-xl'>
          <p>see all product in this category</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={4}
            stroke='currentColor'
            className='w-4 h-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 4.5l7.5 7.5-7.5 7.5'
            />
          </svg>
        </a>
      </Link>
      <hr className='mt-5 bg-neutral-600' />
      <ul>
        <ListCreator
          itemPropsName='menuItem'
          items={menuItems}
          itemComponent={SidebarMenuItem}
        />
      </ul>
    </aside>
  );
};

export default SidebarMenu;
