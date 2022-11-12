import { FC } from "react";

interface Arrows {
  onClick?: () => any;
  style?: any;
}

export const NextArrow: FC<Arrows> = ({ onClick, style }) => (
  <div
    role='next-arrow'
    onClick={onClick}
    className='absolute right-0 top-0 z-[1] w-12 md:w-24 h-full bg-stone-50 dark:bg-stone-600 dark:bg-opacity-0 bg-opacity-0 flex justify-center items-center cursor-pointer transition-all duration-500  hover:bg-opacity-10 dark:hover:bg-opacity-10'
  >
    <div className='bg-white dark:bg-slate-900 dark:bg-opacity-75 bg-opacity-75 shadow-2xl rounded-full w-6 md:w-9 h-6 md:h-9 inline-flex items-center justify-center text-slate-700 dark:text-slate-300'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
      </svg>
    </div>
  </div>
);

export const BackArrow: FC<Arrows> = ({ onClick }) => (
  <div
    role='back-arrow'
    onClick={onClick}
    className='absolute left-0 top-0 z-[1] w-12 md:w-24 h-full  bg-stone-50 dark:bg-stone-600 dark:bg-opacity-0 bg-opacity-0 flex justify-center items-center cursor-pointer transition-all duration-500  hover:bg-opacity-10 dark:hover:bg-opacity-10'
  >
    <div className='bg-white dark:bg-slate-900 dark:bg-opacity-75 bg-opacity-75 shadow-2xl rounded-full w-6 md:w-9 h-6 md:h-9 inline-flex items-center justify-center text-slate-700 dark:text-slate-300'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6'
      >
        <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
      </svg>
    </div>
  </div>
);
