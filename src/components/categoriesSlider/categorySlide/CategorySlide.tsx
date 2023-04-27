import Link from "next/link";
import { memo, FC, ReactNode } from "react";

interface CategorySlideProps {
  header: string;
  children: ReactNode;
  image: string;
}

const CategorySlide: FC<CategorySlideProps> = ({ header, image, children }) => {
  return (
    <article
      className={`${image} w-full h-[30vh] md:h-[70vh] bg-contain md:bg-cover bg-center bg-no-repeat relative overflow-hidden`}
    >
      <Link href='/'>
        <a className='block'>
          <div
            role='image'
            className='backdrop-filter backdrop-blur-[12px] p-3 md:p-8 lg:p-10 shadow-lg rounded-md w-[100%] mt-auto bg-white dark:bg-slate-900 dark:bg-opacity-20 bg-opacity-40 text-slate-800 dark:text-slate-300 md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto h-[50%] md:h-auto'
          >
            <header>
              <h6 className='text-left text-lg md:text-3xl'>{header}</h6>
            </header>
            <p className='text-center text-sm md:text-lg mt-2 md:mt-4 lg:mt-8'>
              {children}
            </p>
          </div>
        </a>
      </Link>
    </article>
  );
};

export default memo(CategorySlide);
