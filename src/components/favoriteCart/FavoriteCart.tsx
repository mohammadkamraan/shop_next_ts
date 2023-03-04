import { FC } from "react";

import useFavoritesStore from "../../store/userFavoritesStore";

import { Product } from "../../typescript/INterfaces";

interface FavoriteCartProps {
  favorite: Product;
}

const FavoriteCart: FC<FavoriteCartProps> = ({ favorite }) => {
  console.log(favorite);
  return <></>;
};

export default FavoriteCart;
