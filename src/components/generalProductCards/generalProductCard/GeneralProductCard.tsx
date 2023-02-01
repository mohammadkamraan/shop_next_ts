import Image from "next/image";
import Link from "next/link";

import { FC, memo } from "react";

import { Product } from "../../../typescript/INterfaces";

import { categories } from "../../../data/categoryOfGoodsData/categoryOfGoodsData";

import dicountIcon from "../../../../public/images/discount-icon/discount-icon.webp";

interface GeneralProductCardProps {
  product: Product;
  type: "special sale" | "interested";
}

const GeneralProductCard: FC<GeneralProductCardProps> = ({ product, type }) => {
  return (
    <Link
      href={`products/${categories[product.category]}/${product.id}`}
      key={product.id}
    >
      <article
        role='card'
        className={`relative h-[19rem] w-full rounded-md ${
          type === "special sale"
            ? "bg-sky-200"
            : "bg-white shadow-md shadow-slate-400"
        } dark:bg-slate-700 dark:bg-opacity-80 my-auto overflow-hidden cursor-pointer`}
      >
        {product.discountPercent !== 0 && (
          <figure className='w-5 sm:w-10 h-5 sm:h-10 absolute top-2 right-2 z-10'>
            <Image src={dicountIcon} alt='has-discount' />
          </figure>
        )}
        <figure className='h-48 w-full text-center p-2'>
          <img
            className={`h-full w-full bg-none bg-sky-200 block ${
              type === "interested" &&
              "transition-all duration-300 hover:scale-105"
            }`}
            src={product.image as string}
            alt={product.title}
          />
        </figure>
        <div>
          <header>
            <h6 className='text-center text-slate-800 dark:text-slate-300 text-lg'>
              {product.title.length > 25
                ? `${product.title.slice(0, 20)} ...`
                : product.title}
            </h6>
          </header>
          <p
            className={`${
              product.discountPercent
                ? "text-red-700 dark:text-pink-300 line-through mt-2"
                : "text-slate-800 text-2xl mt-5"
            } ml-5`}
          >
            $ {product.price}
          </p>
          {!!product.discountPercent && (
            <p className='text-2xl text-slate-800 dark:text-slate-200 font-bold ml-5'>
              $
              {(
                product.price -
                (product.price / 100) * (product.discountPercent as number)
              ).toFixed(2)}
              {product.discountPercent && (
                <span className='text-sm text-teal-600'>
                  ({product.discountPercent}%)
                </span>
              )}
            </p>
          )}
        </div>
      </article>
    </Link>
  );
};

export default memo(GeneralProductCard);
