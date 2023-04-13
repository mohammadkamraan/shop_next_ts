import { FC, memo } from "react";

import { Product } from "../../../typescript/INterfaces";
import ProductPrice from "../productPrice/ProductPrice";

import type { FavoriteHandlers } from "../../../../pages/favorites";

interface FavoriteCartProps {
  favorite: Product;
  addProductToCartHandler: FavoriteHandlers;
  removeProductFromFavoritesHandler: FavoriteHandlers;
}

const FavoriteCard: FC<FavoriteCartProps> = ({
  favorite,
  removeProductFromFavoritesHandler,
  addProductToCartHandler,
}) => {
  return (
    <article
      role='card'
      className='col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 bg-white dark:bg-slate-700 rounded-md shadow-md h-96 font-patrick relative'
    >
      <figure className='w-90% h-2/5 mx-auto mt-5'>
        <img
          className='w-full h-full'
          src={favorite.image as string}
          alt={favorite.title}
        />
      </figure>
      <p className='text-center md:text-left mt-8 px-4'>{favorite.title}</p>
      <div className='px-4'>
        <ProductPrice
          discount={favorite.discountPercent || 0}
          price={favorite.price}
        />
      </div>
      <div className='flex px-5 items-center justify-between absolute bottom-3 w-full'>
        <button
          onClick={() => addProductToCartHandler(favorite)}
          className='inline-flex items-center ring-2 dark:ring-rose-500 ring-rose-700 px-7 rounded-md py-1 text-rose-700 dark:text-rose-500 shadow-sm shadow-rose-700 dark:shadow-rose-500'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 text-rose-700 dark:text-rose-500'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>
          ADD TO CART
        </button>
        <button
          onClick={() => removeProductFromFavoritesHandler(favorite)}
          className='inline-flex items-center text-neutral-400 ring-2 ring-neutral-400 shadow-sm shadow-neutral-400 rounded-md px-5 py-1'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
            />
          </svg>
          Delete
        </button>
      </div>
    </article>
  );
};

export default memo(FavoriteCard);
