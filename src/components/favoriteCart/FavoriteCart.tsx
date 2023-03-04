import { FC } from "react";

import useFavoritesStore from "../../store/userFavoritesStore";
import useCartStore from "../../store/useCartStore";

import { Product } from "../../typescript/INterfaces";

interface FavoriteCartProps {
  favorite: Product;
}

const FavoriteCart: FC<FavoriteCartProps> = ({ favorite }) => {
  return (
    <article
      role='card'
      className='col-span-full sm:col-span-6 md:col-span-4 lg:col-span-3 bg-white rounded-md shadow-md h-96'
    >
      <figure className='w-90% h-2/5 mx-auto mt-5'>
        <img
          className='w-full h-full'
          src={favorite.image as string}
          alt={favorite.title}
        />
      </figure>
      <p className='text-center md:text-left mt-8 px-4'>{favorite.title}</p>
    </article>
  );
};

export default FavoriteCart;
