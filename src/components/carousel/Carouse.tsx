const Carousel = () => {
  return (
    <div className='w-11/12 h-40 overflow-hidden relative '>
      <p className='text-black absolute left-0 top-[45%] z-10'>go right</p>
      <p className='text-black absolute right-0 top-[45%] z-10'>go left</p>
      <div className={`whitespace-nowrap w-full h-full transition-transform duration-300 -translate-x-[100px]`}>
        <div className='w-full inline-flex h-full bg-indigo-400'></div>
        <div className='w-full inline-flex h-full bg-red-400'></div>
        <div className='w-full inline-flex h-full bg-blue-400'></div>
      </div>
    </div>
  );
};

export default Carousel;
