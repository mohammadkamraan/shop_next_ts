import Link from "next/link";
import { FC } from "react";
import Slider from "react-slick";
import { homePage } from "../../data/slidersData/slidersData";

const CategoriesSlider: FC = () => {
  return (
    <section role='slider'>
      <Slider
        {...homePage}
        className='flex w-11/12 mx-auto bg-gray-100 dark:bg-slate-900 pt-2 md:pt-10 font-patrick h-[30vh] md:h-[70vh] relative'
      >
        <article
          className='bg-[url("../public/images/fashion-banner.webp")]
          w-full h-[30vh] md:h-[70vh] bg-contain md:bg-cover bg-center bg-no-repeat relative overflow-hidden'
        >
          <Link href='/'>
            <a className='block'>
              <div
                role='image'
                className='backdrop-filter backdrop-blur-[12px] p-3 md:p-8 lg:p-10 shadow-lg rounded-md w-[100%] mt-auto bg-white dark:bg-slate-900 dark:bg-opacity-20 bg-opacity-40 text-slate-800 dark:text-slate-300 md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto h-[50%] md:h-auto'
              >
                <header>
                  <h6 className='text-left text-lg md:text-3xl'>Beauty and Comfort</h6>
                </header>
                <p className='text-center text-sm md:text-lg mt-2 md:mt-4 lg:mt-8 '>
                  You will find the best fabrics, the hottest designs,
                  <br /> and the most popular brands at reasonable prices.
                  <br /> Look your best and stand out among the crowd.
                </p>
              </div>
            </a>
          </Link>
        </article>
        <article
          className='bg-[url("../public/images/digital-banner.webp")]
          w-full h-[30vh] md:h-[70vh] bg-contain md:bg-cover bg-center bg-no-repeat relative overflow-hidden'
        >
          <Link href='/'>
            <a className='block'>
              <div
                role='image'
                className='backdrop-filter backdrop-blur-[12px] p-3 md:p-8 lg:p-10 shadow-lg rounded-md w-[100%] mt-auto bg-white dark:bg-slate-900 dark:bg-opacity-20 bg-opacity-40 text-slate-800 dark:text-slate-300 md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto h-[50%] md:h-auto'
              >
                <header>
                  <h6 className='text-left text-lg md:text-3xl'>Have the best Experiences</h6>
                </header>
                <p className='text-center text-sm md:text-lg mt-2 md:mt-4 lg:mt-8'>
                  We provide the best Experience with the most popular Brands
                  <br />. With a warranty of 18 months
                  <br />, you can be confident in your choice
                </p>
              </div>
            </a>
          </Link>
        </article>
      </Slider>
    </section>
  );
};

export default CategoriesSlider;
