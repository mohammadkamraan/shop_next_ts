import React, { FC, useEffect, useState } from "react";

interface CarouselItemProps {
  items?: number;
  children: any;
}

export const CarouselItem: FC<CarouselItemProps> = ({ items, children }) => {
  const standardWidth = () => {
    if (!items || items === 1) return "w-full";
    else if (items === 2) return "md:w-1/2 w-full";
    else if (items === 4) return "md:w-1/4 w-full";
    else if (items === 5) return "md:w-1/5 w-full";
  };

  return <div className={`inline-flex h-[90%] md:h-full ${standardWidth()}`}>{children}</div>;
};

const Carousel = (props: any) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [stopCarousel, setStopCarousel] = useState<boolean>(false);

  const updateSliede = (newSlideIndex: number, items: number) => {
    if (newSlideIndex + 1 === items) {
      setCurrentSlide(0);
    } else {
      if (newSlideIndex < 0) {
        newSlideIndex = React.Children.count(props.children) - 1;
      } else if (newSlideIndex >= React.Children.count(props.children)) {
        newSlideIndex = 0;
      }
      setCurrentSlide(newSlideIndex);
    }
  };

  useEffect(() => {
    let interval: any;
    if (props.hasFlow) {
      interval = setInterval(() => {
        if (!stopCarousel) {
          updateSliede(currentSlide + 1, props.items);
        }
      }, 5000);
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentSlide, stopCarousel]);

  return (
    <div
      className='w-full h-full overflow-hidden relative'
      onMouseEnter={() => setStopCarousel(true)}
      onMouseLeave={() => setStopCarousel(false)}
    >
      <div
        onClick={() => {
          updateSliede(currentSlide - 1, props.items);
        }}
        className='absolute left-0 z-[1] w-12 md:w-24 h-full bg-stone-50 dark:bg-stone-600 dark:bg-opacity-0 bg-opacity-0 flex justify-center items-center cursor-pointer transition-all duration-500  hover:bg-opacity-10 dark:hover:bg-opacity-10'
      >
        <div className='bg-white dark:bg-slate-900 dark:bg-opacity-75 bg-opacity-75 shadow-2xl rounded-full w-6 md:w-9 h-6 md:h-9 inline-flex items-center justify-center text-slate-700 dark:text-slate-300'>
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
      <div
        className='absolute right-0 z-[1] w-12 md:w-24 h-full bg-stone-50 dark:bg-stone-600 dark:bg-opacity-0 bg-opacity-0 flex justify-center items-center cursor-pointer transition-all duration-500  hover:bg-opacity-10 dark:hover:bg-opacity-10'
        onClick={() => {
          updateSliede(currentSlide + 1, props.items);
        }}
      >
        <div className='bg-white dark:bg-slate-900 dark:bg-opacity-75 bg-opacity-75 shadow-2xl rounded-full w-6 md:w-9 h-6 md:h-9 inline-flex items-center justify-center text-slate-700 dark:text-slate-300'>
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
      {props.withDots && (
        <ul className='inline-flex items-center justify-center z-[1] absolute bottom-0 w-full h-6'>
          {React.Children.map(props.children, (child: any, index: number) => {
            return (
              <li
                key={index}
                className='inline-flex items-center justify-center border border-slate-800 w-1 h-1 md:w-3 md:h-3 rounded-full mx-6 cursor-pointer overflow-hidden'
              >
                <button
                  onClick={() => setCurrentSlide(index)}
                  className={`${index === currentSlide && "bg-slate-800"} w-full h-full rounded-full`}
                />
              </li>
            );
          })}
        </ul>
      )}
      <div
        className={`whitespace-nowrap w-full h-full transition-all duration-500`}
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {React.Children.map(props.children, (child: any) => {
          return React.cloneElement(child);
        })}
      </div>
    </div>
  );
};

export default Carousel;
