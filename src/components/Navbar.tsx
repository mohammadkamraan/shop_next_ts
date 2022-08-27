import Link from "next/link";
import { useReducer } from "react";

const Navbar = () => {
  const [languageSelect, setLanguageSelect] = useReducer(state => {
    return !state;
  }, false);

  return (
    <header className='flex flex-col w-full font-patrick bg-gray-100 sticky z-10 top-0 '>
      <div className='flex justify-between md:justify-start items-center mt-6 mb-2 text-slate-600 md:order-2 mx-6 md:mx-0'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6 ml-0 md:ml-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
          strokeWidth={2}
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
        </svg>
        <p className='hidden font-black text-lg text-slate-800 ml-2 md:inline'>Category of Goods</p>
        <div className='w-0.5 h-7 bg-neutral-300 rounded-lg mx-3 hidden md:inline' />
        <Link href='/'>
          <a className='text-lg hidden md:inline'>%Offers and Discounts</a>
        </Link>
        <Link href='/'>
          <a className='hidden md:flex md:grow md:items-center md:ml-10'>
            <svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'>
              <path
                fillRule='evenodd'
                d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z'
                clipRule='evenodd'
              />
            </svg>
            The Best-Sells
          </a>
        </Link>
        <div className='mr-6 relative hidden md:inline'>
          <button onClick={setLanguageSelect} className='inline-flex items-center'>
            <p className='font-bold pr-2'>En</p>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              strokeWidth={2}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
              />
            </svg>
          </button>
          <div
            className={`absolute ${
              !languageSelect && "hidden"
            } -bottom-24 -left-28 w-40 h-24 bg-white rounded-md shadow-md z-10 px-6 py-3 font-bold text-lg`}
          >
            <input
              id='en'
              type='radio'
              name='language'
              value='en'
              className='accent-rose-500 w-4 h-4 mr-3 mb-5 inline-flex'
            />
            <label htmlFor='en'>En - english</label>
            <input
              id='fa'
              type='radio'
              name='language'
              value='fa'
              className=' accent-rose-500 w-4 h-4 mr-3 inline-flex'
            />
            <label htmlFor='fa' className='font-vazir'>
              Fa - فارسی
            </label>
          </div>
        </div>
        <div className='inline md:hidden'>
          <p className='font-caveat font-black text-4xl text-rose-500 px-4'>M shop</p>
        </div>
        <button className='mr-4 hidden md:inline'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z'
            />
          </svg>
        </button>
        <button className='inline md:hidden'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z'
            />
            <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
          </svg>
        </button>
      </div>
      <div className='flex items-center md:order-1 w-full mt-3'>
        <p className='font-caveat font-black text-4xl text-rose-500 px-4 hidden md:inline'>M shop</p>
        <div className='flex-grow'>
          <div className='md:w-3/5 w-full h-12 bg-gray-200 rounded-md ml-6 md:ml-4 flex items-center'>
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
            <input
              className='bg-transparent outline-none md:w-5/6 h-full w-full ml-4 placeholder:text-lg'
              placeholder='search'
            />
          </div>
        </div>
        <button
          className='w-32 md:w-auto h-9  border border-stone-200 rounded-md md:flex items-center text-slate-600 shadow-sm transition-all duration-300
                hover:bg-slate-800 hover:text-stone-200 hidden'
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
          <p className='ml-2 hidden md:inline'>login | singup</p>
        </button>
        <button className='inline md:hidden ml-12 text-slate-800'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-7 w-7'
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
        </button>
        <div className='w-0.5 h-7 bg-neutral-300 rounded-lg ml-3 hidden md:inline' />
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
      {/* <hr className='bg-slate-800' /> */}
    </header>
  );
};

export default Navbar;
