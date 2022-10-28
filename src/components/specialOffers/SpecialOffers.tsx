import { FC } from "react";
import ProductsSection from "./productsSection/productsSection";

const SpecialOffers: FC = () => {
  return (
    <div className='w-[92%] bg-sky-500 h-80 mx-auto rounded-l-md font-patrick flex overflow-hidden'>
      {/* special offers background */}
      <div className='w-2/6 md:w-1/6 h-full bg-[url("../public/images/offersbg.webp")] bg-no-repeat bg-cover bg-center flex flex-col justify-around '>
        <h4 className='text-center text-rose-700 text-2xl font-bold mb-12 pt-6'>special offers</h4>
        <button className='bg-zinc-100 dark:bg-slate-700 dark:bg-opacity-80 rounded-md shadow-lg text-rose-700 w-20 py-1 mx-auto transition-all duration-500 hover:text-zinc-100 hover:bg-rose-700 hover:dark:bg-rose-800'>
          See All
        </button>
      </div>
      <div className='w-4/6 md:w-5/6 h-full pl-12 py-4 relative'>
        <ProductsSection />
      </div>
    </div>
  );
};

export default SpecialOffers;
