import type { NextPage } from "next";
import Carousel, { CarouselItem } from "../src/components/carousel/Carouse";

const Home: NextPage = () => {
  return (
    <>
      <div className='flex justify-center w-full bg-gray-100 pt-8'>
        <Carousel>
          <CarouselItem>
            <div className='bg-purple-500 h-full w-full inline-flex'></div>
          </CarouselItem>
          <CarouselItem>
            <div className='bg-red-500 h-full w-full inline-flex'></div>
          </CarouselItem>
          <CarouselItem>
            <div className='bg-green-500 h-full w-full inline-flex'></div>
          </CarouselItem>
        </Carousel>
      </div>
    </>
  );
};

export default Home;
