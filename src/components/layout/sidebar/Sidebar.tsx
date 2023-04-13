import Link from "next/link";
import { Dispatch, SetStateAction, memo } from "react";
import { sidebarItemsData, items } from "../../../data/sidebarData/Sidebar";
import ListCreator from "../../listCreator/ListCreator";
import SidebarItem from "./sidebarItem/SidebarItem";

interface componentProps {
  show: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
  toggleMenu: Dispatch<SetStateAction<boolean>>;
  setMenuItems: Dispatch<SetStateAction<ReadonlyArray<items>>>;
}

const Sidebar = ({
  show,
  setClose,
  toggleMenu,
  setMenuItems,
}: componentProps) => {
  return (
    <aside
      className={`fixed top-0 h-screen w-5/6 bg-neutral-50 dark:bg-slate-900 z-50 md:hidden transition-all duration-500 font-patrick ${
        !show && "-translate-x-full"
      } flex flex-col`}
    >
      <div className='w-full h-16 inline-flex items-center justify-between py-6 px-4 border-b border-neutral-300'>
        <header>
          <h6 className='font-caveat font-black text-4xl text-rose-500'>
            M shop
          </h6>
        </header>
        <button
          className='text-stone-700 dark:text-slate-300'
          onClick={() => {
            setClose(false);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-8 h-8'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </button>
      </div>
      <div className='inline-flex flex-col items-start text-slate-500 dark:text-slate-400 px-6 py-8 text-xl'>
        <Link href='/'>
          <a className='mb-5 inline-flex items-center'>
            <svg
              stroke='currentColor'
              fill='currentColor'
              strokeWidth='0'
              viewBox='0 0 1024 1024'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
              className='mr-6'
            >
              <path d='M855.7 210.8l-42.4-42.4a8.03 8.03 0 0 0-11.3 0L168.3 801.9a8.03 8.03 0 0 0 0 11.3l42.4 42.4c3.1 3.1 8.2 3.1 11.3 0L855.6 222c3.2-3 3.2-8.1.1-11.2zM304 448c79.4 0 144-64.6 144-144s-64.6-144-144-144-144 64.6-144 144 64.6 144 144 144zm0-216c39.7 0 72 32.3 72 72s-32.3 72-72 72-72-32.3-72-72 32.3-72 72-72zm416 344c-79.4 0-144 64.6-144 144s64.6 144 144 144 144-64.6 144-144-64.6-144-144-144zm0 216c-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72-32.3 72-72 72z'></path>
            </svg>
            <p>Offers and Discounts</p>
          </a>
        </Link>
        <Link href='/'>
          <a className='inline-flex items-center cursor-auto'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 cursor-pointer mr-6'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
                clipRule='evenodd'
              />
            </svg>
            <p className='cursor-pointer'>The Best-Sells</p>
          </a>
        </Link>
      </div>
      <hr className='w-[87%] mx-auto bg-neutral-300' />
      <section className='flex flex-col mt-8 w-full px-5'>
        <h3 className='text-2xl font-bold text-slate-700 dark:text-slate-300'>
          Category of Goods
        </h3>
        <ul className='flex flex-col'>
          <ListCreator
            items={sidebarItemsData}
            itemPropsName='sidebarItem'
            itemComponent={SidebarItem}
            extraProps={{ toggleMenu, setMenuItems }}
          />
        </ul>
      </section>
    </aside>
  );
};

export default memo(Sidebar);
