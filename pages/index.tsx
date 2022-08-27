import type { NextPage } from "next";
import Link from "next/link";
import Carousel, { CarouselItem } from "../src/components/carousel/Carouse";

// const carouselData = [{

// }];

const Home: NextPage = () => {
  return (
    <>
      <div className='flex justify-center w-full bg-gray-100 pt-8 font-patrick'>
        <Carousel>
          <CarouselItem>
            <div
              className='bg-[url("../src/images/horizontal-banner-online-fashion-sale_23-2148585404.webp")]
              w-full h-full bg-contain md:bg-cover bg-no-repeat relative'
            >
              <Link href='/'>
                <a className='block'>
                  <div className='backdrop-filter backdrop-blur-[12px] p-3 md:p-8 lg:p-10 shadow-lg rounded-md w-[100%] mt-auto bg-white bg-opacity-40 text-slate-800 md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto'>
                    <h6 className='text-left text-lg md:text-3xl'>Beauty and Comfort</h6>
                    <p className='text-left text-sm mt-2 md:mt-4 lg:mt-8 '>
                      You will find the best fabrics, the hottest designs, and the most popular brands at
                      <br /> reasonable prices. Look your best and stand out among the crowd.
                    </p>
                  </div>
                </a>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div
              className='bg-[url("../src/images/elektronik-footer-banner.webp")]
              w-full h-full bg-contain md:bg-cover bg-no-repeat relative'
            >
              <Link href='/'>
                <div className='block'>
                  <div className='backdrop-filter backdrop-blur-[12px] p-3 md:p-8 lg:p-10 shadow-lg rounded-md w-[100%] mt-auto bg-white bg-opacity-40 text-slate-800 md:w-[60%] lg:w-[50%] md:mt-auto absolute bottom-0 md:top-[45%] md:right-[25%] md:bottom-auto'>
                    <h6 className='text-left text-lg md:text-3xl'>Have the best Experiences</h6>
                    <p className='text-left text-sm mt-2 md:mt-4 lg:mt-8'>
                      We provide the best Experience with the most popular Brands. With a warranty
                      <br /> of 18 months, you can be confident in your choice
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
