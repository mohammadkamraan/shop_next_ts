import { FC } from "react";

import { Product } from "../../../typescript/INterfaces";
import StarsRating from "../../starsRating/StarsRating";

interface ProductDataProps {
  productData: Product;
}

const ProductData: FC<ProductDataProps> = ({ productData }) => {
  return (
    <section className='bg-slate-50 dark:bg-slate-700 w-full ml-56 md:bg-transparent font-patrick text-lg'>
      <h1 className='text-slate-700 dark:text-slate-400'>
        {productData.title}
      </h1>
      <hr className='w-90%  h-2 mt-3' />
      <StarsRating stars={+productData.rating.rate.toFixed(0)} />
      <p className='text-2xl'>Product Details</p>
    </section>
  );
};

export default ProductData;
