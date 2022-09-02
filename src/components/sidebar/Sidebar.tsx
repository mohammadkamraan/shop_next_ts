import Link from "next/link";
import { Dispatch, SetStateAction, ReactElement } from "react";
import ListCreator from "../listCreator/ListCreator";
import SidebarItem from "./sidebarItem/SidebarItem";

interface products {
  product: string;
  link: string;
}

interface items {
  itemName: string;
  products: ReadonlyArray<products>;
}

export interface sidebarItems {
  svg: ReactElement<SVGAElement>;
  categoryName: string;
  exists: boolean;
  productsInCategory?: ReadonlyArray<items>;
}

const sidebarItems: ReadonlyArray<sidebarItems> = [
  {
    svg: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 16 16'
        className='w-6 h-6 '
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z'></path>
      </svg>
    ),
    categoryName: "Digital",
    exists: true,
    productsInCategory: [
      {
        itemName: "Laptop and Accessories",
        products: [
          { product: "Asus", link: "/" },
          { product: "Apple", link: "/" },
          { product: "Dell", link: "/" },
          { product: "Lenovo", link: "/" },
          { product: "Samsung", link: "/" },
          { product: "HP", link: "/" },
          { product: "HUAWEI", link: "/" },
          { product: "Acer", link: "/" },
          { product: "MSI", link: "/" },
        ],
      },
    ],
  },
  {
    svg: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 512 512'
        className='w-6 h-6'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path
          fill='none'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='32'
          d='M314.56 48s-22.78 8-58.56 8-58.56-8-58.56-8a31.94 31.94 0 00-10.57 1.8L32 104l16.63 88 48.88 5.52a24 24 0 0121.29 24.58L112 464h288l-6.8-241.9a24 24 0 0121.29-24.58l48.88-5.52L480 104 325.13 49.8a31.94 31.94 0 00-10.57-1.8zm18.75 4.66a80 80 0 01-154.62 0'
        ></path>
      </svg>
    ),
    categoryName: "Fation and Clothes",
    exists: true,
    productsInCategory: [
      {
        itemName: "men's Fation",
        products: [
          { product: "Shirt", link: "/" },
          { product: "Pants", link: "/" },
          { product: "Tie", link: "/" },
          { product: "T-shirt", link: "/" },
          { product: "Shoes", link: "/" },
          { product: "Jeans", link: "/" },
        ],
      },
    ],
  },
  {
    svg: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 24 24'
        className='w-6 h-6 '
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M18.75 10.08L17.4 6.05A2.978 2.978 0 0014.56 4H9.44C8.15 4 7 4.82 6.6 6.05L5.81 8.4 4.41 7l.29-.29A.996.996 0 103.29 5.3l-2 2A.996.996 0 102.7 8.71l.3-.3 1.79 1.79C3.18 10.72 2 12.22 2 14c0 1.49.83 2.78 2.05 3.47A2.991 2.991 0 007 20c1.3 0 2.4-.84 2.82-2h4.37c.41 1.16 1.51 2 2.82 2 1.49 0 2.73-1.1 2.95-2.53C21.17 16.78 22 15.49 22 14c0-1.95-1.4-3.57-3.25-3.92zM13 6h1.56a1 1 0 01.95.68l1.1 3.32H13V6zm-4.51.68A1 1 0 019.44 6H11v4H7.41l-.02-.02 1.1-3.3zM7 18c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm10 0c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm2.49-2.68A3.028 3.028 0 0017 14c-1.3 0-2.4.84-2.82 2H9.82C9.4 14.84 8.3 14 7 14c-1.03 0-1.95.53-2.49 1.32C4.2 14.97 4 14.51 4 14c0-1.1.9-2 2-2h12c1.1 0 2 .9 2 2 0 .51-.2.97-.51 1.32z'></path>
      </svg>
    ),
    categoryName: "Toys and baby",
    exists: false,
  },
  {
    svg: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 24 24'
        className='w-6 h-6 '
        xmlns='http://www.w3.org/2000/svg'
      >
        <g>
          <path fill='none' d='M0 0H24V24H0z'></path>
          <path d='M16.5 3C19.538 3 22 5.5 22 9c0 7-7.5 11-10 12.5-1.977-1.186-7.083-3.937-9.131-8.499L1 13v-2h1.21C2.074 10.364 2 9.698 2 9c0-3.5 2.5-6 5.5-6C9.36 3 11 4 12 5c1-1 2.64-2 4.5-2zm0 2c-1.076 0-2.24.57-3.086 1.414L12 7.828l-1.414-1.414C9.74 5.57 8.576 5 7.5 5 5.56 5 4 6.656 4 9c0 .685.09 1.352.267 2h2.167L8.5 7.556l3 5L12.434 11H17v2h-3.434L11.5 16.444l-3-5L7.566 13H5.108c.79 1.374 1.985 2.668 3.537 3.903.745.592 1.54 1.145 2.421 1.7.299.189.595.37.934.572.339-.202.635-.383.934-.571.881-.556 1.676-1.109 2.42-1.701C18.335 14.533 20 11.943 20 9c0-2.36-1.537-4-3.5-4z'></path>
        </g>
      </svg>
    ),
    categoryName: "Cosmetic",
    exists: false,
  },
  {
    svg: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 1024 1024'
        className='w-6 h-6 '
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z'></path>
      </svg>
    ),
    categoryName: "Furniture and kitchen",
    exists: false,
  },
  {
    svg: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 24 24'
        className='w-6 h-6 '
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M19.071 4.929a9.936 9.936 0 0 0-7.07-2.938 9.943 9.943 0 0 0-7.072 2.938c-3.899 3.898-3.899 10.243 0 14.142a9.94 9.94 0 0 0 7.073 2.938 9.936 9.936 0 0 0 7.07-2.937c3.899-3.898 3.899-10.243-.001-14.143zM12.181 4h-.359c.061-.001.119-.009.18-.009s.118.008.179.009zm6.062 13H16l-1.258 2.516a7.956 7.956 0 0 1-2.741.493 7.96 7.96 0 0 1-2.746-.494L8 17.01H5.765a7.96 7.96 0 0 1-1.623-3.532L6 11 4.784 8.567a7.936 7.936 0 0 1 1.559-2.224 7.994 7.994 0 0 1 3.22-1.969L12 6l2.438-1.625a8.01 8.01 0 0 1 3.22 1.968 7.94 7.94 0 0 1 1.558 2.221L18 11l1.858 2.478A7.952 7.952 0 0 1 18.243 17z'></path>
        <path d='m8.5 11 1.5 4h4l1.5-4L12 8.5z'></path>
      </svg>
    ),
    categoryName: "Sport and Trip",
    exists: false,
  },
  {
    svg: (
      <svg
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 16 16'
        className='w-6 h-6 '
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z'></path>
      </svg>
    ),
    categoryName: "Books, Stationery and Art",
    exists: false,
  },
];

interface componentProps {
  show: boolean;
  setClose: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ show, setClose }: componentProps) => {
  return (
    <div
      className={`fixed top-0 h-screen w-5/6 bg-neutral-50 z-[1000] md:hidden transition-all duration-500 ${
        !show && "-translate-x-full"
      } flex flex-col`}
    >
      <div className='w-full h-16 inline-flex items-center justify-between py-6 px-4 border-b border-neutral-300'>
        <p className='font-caveat font-black text-4xl text-rose-500'>M shop</p>
        <button
          className='text-stone-700'
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
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>
      <div className='inline-flex flex-col items-start text-slate-500 px-6 py-8 text-xl'>
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
      <div className='flex flex-col mt-8 w-full px-5'>
        <h3 className='text-2xl font-bold text-slate-700'>Category of Goods</h3>
        <ul className='flex flex-col'>
          <ListCreator items={sidebarItems} itemPropsName='sidebarItem' itemComponent={SidebarItem} />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
