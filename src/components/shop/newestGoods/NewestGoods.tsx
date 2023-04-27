import Link from "next/link";
import { useSession } from "next-auth/react";

import { FC, memo } from "react";

import useCartStore from "../../../store/useCartStore";
import useFavoritesStore from "../../../store/userFavoritesStore";

import Anchor from "../../UI/anchor/Anchor";
import GridSystem from "../../UI/gridSystem/GridSystem";
import NewGoodCard from "./newGoodCard/NewGoodCard";
import ListCreator from "../../listCreator/ListCreator";
import SectionHeader from "../../UI/sectionHeader/SectionHeader";
import { ToastContainer } from "react-toastify";

import { addProductToCartHandler } from "../../../util/addProductToCart";

import { Product } from "../../../typescript/Interfaces";

import "react-toastify/dist/ReactToastify.css";
interface NewestGoodsComponentProps {
  goods: Product[];
}

const NewestGoods: FC<NewestGoodsComponentProps> = ({ goods }) => {
  const { status } = useSession();

  const { addProductToFavorites, removeProductFromFavorites, favoritesData } =
    useFavoritesStore();

  const { addItemsToCart } = useCartStore();

  const addItemToCartHandler = (product: Product) => {
    addProductToCartHandler({
      product,
      handler: addItemsToCart,
      count: 1,
      status,
    });
  };

  return (
    <>
      <ToastContainer />
      <section className='font-patrick px-8 sm:px-24 w-full'>
        <SectionHeader>
          <h6>Newest Goods</h6>
        </SectionHeader>
        <GridSystem gap='gap-5' needRows={false}>
          <ListCreator
            items={goods}
            itemComponent={NewGoodCard}
            itemPropsName='item'
            extraProps={{
              addProductToFavorites,
              addItemToCartHandler,
              removeProductFromFavorites,
              favoritesData,
            }}
          />
        </GridSystem>
        <Link href='/'>
          <Anchor
            isScaleAble
            styles='mx-auto my-5 w-64 block py-3 px-8 text-center text-xl rounded-lg'
          >
            See All New Products
          </Anchor>
        </Link>
      </section>
    </>
  );
};

export default memo(NewestGoods);
