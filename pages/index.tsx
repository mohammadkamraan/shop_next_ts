import type { NextPage } from "next";
import Carousel from "../src/components/carousel/Carouse";

const Home: NextPage = () => {
  return (
    <>
      <div className='flex justify-center w-full bg-gray-100 pt-8'>
        <Carousel />
      </div>
    </>
  );
};

export default Home;
