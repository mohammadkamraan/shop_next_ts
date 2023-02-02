import { FC, memo } from "react";

import { Product } from "../../../typescript/INterfaces";
import StarsRating from "../../starsRating/StarsRating";
import ProductPricing from "./productPricing/ProductPricing";

interface ProductDataProps {
  productData: Product;
}

const ProductData: FC<ProductDataProps> = ({ productData }) => {
  return (
    <article className='bg-white rounded-t-[80px] md:rounded-none overflow-hidden md:bg-transparent md:dark:bg-slate-700 w-full ml-0 md:ml-20 font-patrick text-lg'>
      <h1 className='text-slate-700 dark:text-slate-400 mx-9 md:mx-0 text-center md:text-left'>
        {productData.title}
      </h1>
      <hr className='h-2 mt-3' />
      <div className='mt-5 flex flex-col md:flex-row items-center flex-wrap md:flex-nowrap md:items-center'>
        <div className=' w-4/6'>
          <div className='inline-flex items-center'>
            <StarsRating stars={+productData.rating.rate.toFixed(0)} />
            <p className='ml-2'>
              {+productData.rating.rate.toFixed(0)} Star
              {+productData.rating.rate.toFixed(0) > 1 ? "s" : ""}
            </p>
          </div>
          <p className='text-xl md:text-2xl mt-3'>Product Details</p>
          <p className='text-slate-600 dark:text-slate-400 mt-2 text-lg md:text-xl'>
            Title :
            <span className='text-slate-800 dark:text-slate-300 text-base md:text-lg'>
              {productData.title}
            </span>
          </p>
          <p className='text-slate-600 dark:text-slate-400 mt-2 text-lg md:text-xl'>
            Description :
            <span className='text-slate-800 dark:text-slate-300 text-base md:text-lg'>
              {productData.description}
            </span>
          </p>
          <p className='text-slate-600 dark:text-slate-400 mt-2 text-lg md:text-xl'>
            Category :
            <span className='text-slate-800 dark:text-slate-300 text-base md:text-lg'>
              {productData.category}
            </span>
          </p>
        </div>
        <ProductPricing
          price={productData.price}
          discount={productData.discountPercent as number}
        />
      </div>
    </article>
  );
};

export default memo(ProductData);
