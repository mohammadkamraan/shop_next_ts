const Navbar = () => {
  return (
    <header className='flex flex-col w-full pt-4 font-patrick bg-gray-100'>
      <div className='flex items-center'>
        <p className='font-caveat font-black text-4xl text-rose-500 px-4'>M shop</p>
        <div className='flex-grow'>
          <div className='w-3/5 h-12 bg-gray-200 rounded-md ml-4 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 text-gray-500 ml-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path strokeLinecap='round' strokeLinejoin='round' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
            </svg>
            <input className='bg-transparent outline-none w-5/6 h-full ml-4 placeholder:text-lg' placeholder='search' />
          </div>
        </div>
        <button
          className='w-32 h-9 border border-stone-200 rounded-md flex items-center text-slate-600 shadow-sm transition-all duration-300
                hover:bg-slate-800 hover:text-stone-200'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 ml-2'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1'
            />
          </svg>
          <p className='ml-2'>login | singup</p>
        </button>
        <div className='w-0.5 h-7 bg-neutral-300 rounded-lg ml-3' />
        <span className='relative mr-5 ml-5'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7 text-slate-700 ml-3'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          <span className='bg-rose-500 absolute -top-3 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-neutral-50 text-xs'>
            0
          </span>
        </span>
      </div>
      <div className=''></div>
    </header>
  );
};

export default Navbar;
