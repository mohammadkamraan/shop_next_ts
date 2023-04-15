import Image from "next/image";
import Link from "next/link";
import { FC, useMemo, useState } from "react";

import { categories } from "../../../../data/categoryOfGoodsData/categoryOfGoodsData";
import { Product } from "../../../../typescript/INterfaces";
import StarsRating from "../../../UI/starsRating/StarsRating";
// images
import dicountIcon from "../../../../../public/images/discount-icon/discount-icon.webp";
import useFavoritesStore, {
  FavoritesStore,
} from "../../../../store/userFavoritesStore";
import ConditionalRenderer from "../../../conditionalRenderer/ConditionalRenderer";
import ProductPrice from "../../../UI/productPrice/ProductPrice";

interface NewGoodCardDataComponentProps {
  item: Product;
}

// interface FavoritesHandlers {
//   true: (productIndex: number) => void;
//   false: (produt: Product) => void;
// }

const NewGoodCard: FC<NewGoodCardDataComponentProps> = ({ item }) => {
  const { addProductToFavorites, removeProductFromFavorites, favoritesData } =
    useFavoritesStore((state: FavoritesStore) => state);

  return (
    <div
      role='card'
      className='col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2 h-64 sm:h-96 rounded-xl shadow-xl bg-white dark:bg-slate-800 relative'
    >
      <Link href={`/products/${categories[item.category]}/${item.id}`}>
        <a className='h-full w-full flex sm:block'>
          <figure className='w-2/5 sm:h-40 h-full sm:w-full'>
            <img
              className='sm:px-8 py-2 w-full h-full pl-2 sm:py-4 transition-all duration-300 hover:scale-105'
              src={item.image as string}
              alt={item.title}
            />
          </figure>
          {item.discountPercent !== 0 && (
            <figure className='w-5 sm:w-10 h-5 sm:h-10 absolute -top-3 -right-2'>
              <Image src={dicountIcon} alt='has-discount' />
            </figure>
          )}
          <div className='w-3/5 sm:w-full my-auto'>
            <div className='flex justify-center py-3'>
              <StarsRating stars={item.rating.rate} />
            </div>
            <div className='flex flex-col justify-between sm:h-44'>
              <div className='text-center sm:px-2 px-8'>
                <p className='text-slate-500'>{item.title}</p>
              </div>
              <div className='pl-4'>
                <ProductPrice
                  price={item.price}
                  discount={item.discountPercent || 0}
                />
              </div>
            </div>
          </div>
        </a>
      </Link>
      {/* like, share,add to cart */}
      <div className='absolute bottom-5 sm:top-0 sm:left-0 bg-slate-300 dark:bg-slate-900  bg-opacity-50 sm:bg-opacity-25 sm:dark:bg-opacity-15 dark:text-slate-400 rounded-lg sm:rounded-2xl w-2/5 h-8 sm:h-28 sm:w-8 items-center flex sm:flex-col justify-evenly shadow-md'>
        <ConditionalRenderer
          condition={
            (favoritesData.favoritesId as number[]).indexOf(item.id) > -1
          }
          whenConditionIsTrue={
            <figure>
              <svg
                onClick={() => {
                  removeProductFromFavorites(item.id);
                }}
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5 fill-rose-500 cursor-pointer'
              >
                <path d='M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z' />
              </svg>
            </figure>
          }
          whenConditionIsFalse={
            <figure className='transition-all duration-300 hover:text-rose-600 cursor-pointer'>
              <svg
                onClick={() => {
                  addProductToFavorites(item);
                }}
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
                  d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
                />
              </svg>
            </figure>
          }
        />
        <figure className='transition-all duration-300 hover:text-rose-600 cursor-pointer'>
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
              d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
            />
          </svg>
        </figure>
        <figure className='transition-all duration-300 hover:text-rose-600 cursor-pointer'>
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
              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>
        </figure>
      </div>
    </div>
  );
};

export default NewGoodCard;
