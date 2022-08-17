import React, { useState } from "react";
export const CarouselItem = (prop: any) => {
  return prop.children;
};

const Carousel = (props: any) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const translateValue = (number: number) => {
    return `-translate-x-[${number}px]`;
  };

  return (
    <div className='w-11/12 h-[70vh] overflow-hidden relative '>
      <div className='absolute left-0  z-10 w-24 h-full bg-stone-50 bg-opacity-0 flex justify-center items-center cursor-pointer transition-all duration-500  hover:bg-opacity-10'>
        <div className='bg-white  bg-opacity-75 shadow-2xl rounded-full w-9 h-9 inline-flex items-center justify-center text-slate-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M15 19l-7-7 7-7' />
          </svg>
        </div>
      </div>
      <div className='absolute right-0 z-10 w-24 h-full bg-stone-50 bg-opacity-0 flex justify-center items-center cursor-pointer transition-all duration-500  hover:bg-opacity-10'>
        <div className='bg-white  bg-opacity-75 shadow-2xl rounded-full w-9 h-9 inline-flex items-center justify-center text-slate-700'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' />
          </svg>
        </div>
      </div>
      <ul className='absolute bottom-0 w-full flex justify-center h-6'>
        {React.Children.map(props.children, (child: any, index: number) => {
          return (
            <li
              key={index}
              className='inline-flex items-center justify-center border border-slate-800 w-2 h-2 rounded-full mx-6 cursor-pointer'
            >
              <button className={`${index === currentSlide && "bg-slate-800"} w-full h-full`} />
            </li>
          );
        })}
      </ul>
      <div
        className={`whitespace-nowrap w-full h-full transition-all duration-500 ${translateValue(50)}`}
        style={{ transform: `translateX(-${2 * 100}%)` }}
      >
        {React.Children.map(props.children, (child: any) => {
          return React.cloneElement(child);
        })}
      </div>
    </div>
  );
};

export default Carousel;
