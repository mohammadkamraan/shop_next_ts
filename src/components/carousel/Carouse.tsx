import React, { useEffect, useState } from "react";
export const CarouselItem = (prop: any) => {
  return <div className='inline-flex h-[90%] md:h-full w-full'>{prop.children}</div>;
};

const Carousel = (props: any) => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const [stopCarousel, setStopCarousel] = useState<boolean>(false);

  const updateSliede = (newSlideIndex: number) => {
    if (newSlideIndex < 0) {
      newSlideIndex = React.Children.count(props.children) - 1;
    } else if (newSlideIndex >= React.Children.count(props.children)) {
      newSlideIndex = 0;
    }
    setCurrentSlide(newSlideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!stopCarousel) {
        updateSliede(currentSlide + 1);
      }
    }, 5000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [currentSlide, stopCarousel]);

  return (
    <div
      className='w-11/12 h-[30vh] md:h-[70vh] overflow-hidden relative'
      onMouseEnter={() => setStopCarousel(true)}
      onMouseLeave={() => setStopCarousel(false)}
    >
      <div
        onClick={() => {
          updateSliede(currentSlide - 1);
        }}
        className='absolute left-0 z-[1] w-12 md:w-24 h-full bg-stone-50 bg-opacity-0 flex justify-center items-center cursor-pointer transition-all duration-500  hover:bg-opacity-10'
      >
        <div className='bg-white bg-opacity-75 shadow-2xl rounded-full w-6 md:w-9 h-6 md:h-9 inline-flex items-center justify-center text-slate-700'>
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
        className='absolute right-0 z-[1] w-12 md:w-24 h-full bg-stone-50 bg-opacity-0 flex justify-center items-center cursor-pointer transition-all duration-500  hover:bg-opacity-10'
        onClick={() => {
          updateSliede(currentSlide + 1);
        }}
      >
        <div className='bg-white bg-opacity-75 shadow-2xl rounded-full w-6 md:w-9 h-6 md:h-9 inline-flex items-center justify-center text-slate-700'>
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
