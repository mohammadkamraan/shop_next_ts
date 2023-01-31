import Link from "next/link";
import { FC, useContext, memo } from "react";
import Slider from "react-slick";

import AllProductsContext from "../../../context/AllProductsContext";

// import slider setting
import { specialProducts } from "../../../data/slidersData/slidersData";

import { categories } from "../../../data/categoryOfGoodsData/categoryOfGoodsData";

import { Product } from "../../../typescript/INterfaces";

const ProductsSection: FC = () => {
  const contextData = useContext(AllProductsContext);

  return (
    <Slider {...specialProducts} className='slick-has-margin'>
      {contextData?.allProducts?.slice(0, 10)?.map((product: Product) => (
        <Link
          href={`products/${categories[product.category]}/${product.id}`}
          key={product.id}
        >
          <article className='relative h-[19rem] w-full rounded-md bg-sky-200 dark:bg-slate-700 dark:bg-opacity-80 my-auto overflow-hidden cursor-pointer'>
            <figure className='h-48 w-full text-center p-2'>
              <img
                className='h-full w-full bg-none bg-sky-200 block'
                src={product.image as string}
                alt={product.title}
              />
            </figure>
            <div>
              <header>
                <h6 className='text-center text-slate-800 dark:text-slate-300 text-lg'>
                  {product.title.length > 25
                    ? `${product.title.slice(0, 25)} ...`
                    : product.title}
                </h6>
              </header>
              <p className='text-lg text-red-700 dark:text-pink-300 line-through ml-5'>
                $ {product.price}
              </p>
              <p className='text-2xl text-slate-800 dark:text-slate-200 font-bold ml-5'>
                ${(product.price - (product.price / 100) * 20).toFixed(2)}
                <span className='text-sm text-teal-600'>(-20%)</span>
              </p>
            </div>
          </article>
        </Link>
      ))}
    </Slider>
  );
};

export default memo(ProductsSection);
