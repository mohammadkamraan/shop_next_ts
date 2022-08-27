import type { NextPage } from "next";
import Carousel, { CarouselItem } from "../src/components/carousel/Carouse";

// const carouselData = [{

// }];

const Home: NextPage = () => {
  return (
    <>
      <div className='flex justify-center w-full bg-gray-100 pt-8'>
        <Carousel>
          <CarouselItem>
            <div className='bg-[url("../src/images/horizontal-banner-online-fashion-sale_23-2148585404.webp")] w-full h-full bg-contain bg-no-repeat'></div>
            {/* <div className='w-full h-full bg-teal-500'></div> */}
          </CarouselItem>
          <CarouselItem>
            <div className='bg-[url("../src/images/elektronik-footer-banner.webp")] w-full h-full bg-contain bg-no-repeat'></div>
            {/* <div className='w-full h-full bg-rose-500'></div> */}
          </CarouselItem>
          <CarouselItem>
            <div className='bg-blue-500 h-full w-full inline-flex'></div>
          </CarouselItem>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
