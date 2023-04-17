import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC, memo } from "react";
import { toast, ToastContainer } from "react-toastify";
import useCartStore from "../../../store/useCartStore";
import useFavoritesStore from "../../../store/userFavoritesStore";
import { Product } from "../../../typescript/INterfaces";
import ListCreator from "../../listCreator/ListCreator";
import Anchor from "../../UI/anchor/Anchor";
import GridSystem from "../../UI/gridSystem/GridSystem";
import NewGoodCard from "./newGoodCard/NewGoodCard";

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
    if (status === "loading") {
      toast.info("Your auth status is unknown");
    } else if (status === "unauthenticated") {
      toast.error("Please first login ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      addItemsToCart({
        ...product,
        count: 1,
        discountedPrice: product.discountPercent
          ? product.price - (product.price / 100) * product.discountPercent
          : product.price,
      });
      toast.success("Added to the cart");
    }
  };

  const handleCopyClick = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success("Link Copied To Clipboard");
    } catch {
      toast.error("someThing Went wrong :(");
    }
  };

  return (
    <>
      <ToastContainer />
      <section className='font-patrick px-8 sm:px-24 w-full'>
        <header className='py-12 text-slate-800 text-4xl text-center'>
          <h6>Newest Goods</h6>
        </header>
        <GridSystem gap='gap-5' needRows={false}>
          <ListCreator
            items={goods}
            itemComponent={NewGoodCard}
            itemPropsName='item'
            extraProps={{
              addProductToFavorites,
              addItemToCartHandler,
              removeProductFromFavorites,
              handleCopyClick,
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
