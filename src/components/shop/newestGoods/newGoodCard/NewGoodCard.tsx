import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import { categories } from "../../../../data/categoryOfGoodsData/categoryOfGoodsData";
import { Product } from "../../../../typescript/interfaces";
import StarsRating from "../../../UI/starsRating/StarsRating";

import ProductPrice from "../../../UI/productPrice/ProductPrice";

import { FavoriteData } from "../../../../typescript/interfaces";
import type {
  AddProduct,
  RemoveProductFromFavorites,
} from "../../../../typescript/types";

// images
import dicountIcon from "../../../../../public/images/discount-icon/discount-icon.webp";
import Like from "../../../UI/icons/like/Like";
import Share from "../../../UI/icons/share/Share";
import CartIcon from "../../../UI/icons/Cart/CartIcon";

interface NewGoodCardDataComponentProps {
  item: Product;
  favoritesData: FavoriteData;
  addProductToFavorites: AddProduct;
  removeProductFromFavorites: RemoveProductFromFavorites;
  addItemToCartHandler: AddProduct;
  handleCopyClick: (text: string) => void;
}

const NewGoodCard: FC<NewGoodCardDataComponentProps> = ({
  item,
  favoritesData,
  addItemToCartHandler,
  addProductToFavorites,
  removeProductFromFavorites,
}) => {
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
      <div className='absolute bottom-5 sm:top-0 sm:left-0 bg-slate-300 dark:bg-slate-900  bg-opacity-50 sm:bg-opacity-25 sm:dark:bg-opacity-15 dark:text-slate-400 rounded-lg sm:rounded-2xl w-2/5 h-8 sm:h-28 sm:w-8 items-center flex sm:flex-col justify-evenly shadow-md'>
        <Like
          ids={favoritesData.favoritesId}
          onAddToFavorites={addProductToFavorites}
          onRemoveOfFavorites={removeProductFromFavorites}
          product={item}
        />
        <Share product={item} />
        <CartIcon onAddToCart={addItemToCartHandler} product={item} />
      </div>
    </div>
  );
};

export default NewGoodCard;
