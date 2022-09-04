import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Carousel, { CarouselItem } from "../src/components/carousel/Carouse";
import Possibilities from "../src/components/possibilities/Possibilities";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Nextjs online shop github project' />
        <meta name='keywords' content='HTML,Tailwincss,Javascript,Reactjs,Nextjs,Redux,Redux-toolkit' />
        <meta name='author' content='Mohammad mahdi Kamran' />
        <title>M Shop</title>
      </Head>
      <div className='flex justify-center w-full bg-gray-100 dark:bg-slate-900 pt-2 md:pt-10 font-patrick'>
        <Carousel>
          <CarouselItem>
            <div
              className='bg-[url("../public/images/fashion-banner.webp")]
              w-full h-full bg-contain md:bg-cover bg-center bg-no-repeat relative overflow-hidden'
            >
              <Link href='/'>
                <a className='block'>
                  <div className='backdrop-filter backdrop-blur-[12px] p-3 md:p-8 lg:p-10 shadow-lg rounded-md w-[100%] mt-auto bg-white dark:bg-slate-900 dark:bg-opacity-20 bg-opacity-40 text-slate-800 dark:text-slate-300 md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto h-[50%] md:h-auto'>
                    <h6 className='text-left text-lg md:text-3xl'>Beauty and Comfort</h6>
                    <p className='text-center text-sm md:text-lg mt-2 md:mt-4 lg:mt-8 '>
                      You will find the best fabrics, the hottest designs,
                      <br /> and the most popular brands at reasonable prices.
                      <br /> Look your best and stand out among the crowd.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className='bg-[url("../public/images/digital-banner.webp")]
              w-full h-full bg-contain md:bg-cover bg-center bg-no-repeat relative overflow-hidden'
            >
              <Link href='/'>
                <a className='block'>
                  <div className='backdrop-filter backdrop-blur-[12px] p-3 md:p-8 lg:p-10 shadow-lg rounded-md w-[100%] mt-auto bg-white dark:bg-slate-900 dark:bg-opacity-20 bg-opacity-40 text-slate-800 dark:text-slate-300 md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto h-[50%] md:h-auto'>
                    <h6 className='text-left text-lg md:text-3xl'>Have the best Experiences</h6>
                    <p className='text-center text-sm md:text-lg mt-2 md:mt-4 lg:mt-8'>
                      We provide the best Experience with the most popular Brands
                      <br />. With a warranty of 18 months
                      <br />, you can be confident in your choice
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
      <Possibilities />
    </>
  );
};

export default Home;
