import { NextPage } from "next";
import Head from "next/head";

import { AddToCartFunctionality } from "../../../../src/context/AddToCartFunctionality";

import { dataFetcher } from "../../../../src/util/requestHandlers";
import { categories } from "../../../../src/data/categoryOfGoodsData/categoryOfGoodsData";

import { ClientSideCategorie } from "../../../../src/typescript/types";
import UserLocation from "../../../../src/components/UI/userLocation/UserLocation";
import ProductDetail from "../../../../src/components/shop/productDetail/ProductDetail";

import { discountPercentHandler } from "../../../../src/util/discountHandler";

import Possibilities from "../../../../src/components/shop/possibilities/Possibilities";
import { possibilities } from "../../../../src/data/possibilitiesData/possibilitiesData";
import { newestGoods } from "../../../../src/util/newestGoods";

import { ProductDetailProps } from "../../../../src/components/shop/productDetail/ProductDetail";
import MayInterested from "../../../../src/components/shop/MayInterested/MayInterested";
import { Product } from "../../../../src/typescript/INterfaces";

import useCartStore from "../../../../src/store/useCartStore";
import { useSession } from "next-auth/react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type Categories =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

interface Params {
  productId: string;
  category: ClientSideCategorie;
}

interface Pathes {
  params: ReadonlyArray<Params>;
}

interface ProductProps extends ProductDetailProps {
  interestedInData: Product[];
}

export type AddProductToCart = (count: number) => void;

const ProductPage: NextPage<ProductProps> = ({ product, interestedInData }) => {
  const addItemsToCart = useCartStore((state: any) => state.addItemsToCart);

  const { status } = useSession();

  const addProductToCart: AddProductToCart = count => {
    if (status === "loading") {
      toast.info("Your auth status is undifined");
    } else if (status === "unauthenticated") {
      toast.error("Please first login ", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      addItemsToCart({
        ...product,
        count,
        discountedPrice: product.discountPercent
          ? product.price - (product.price / 100) * product.discountPercent
          : product.price,
      });
      toast.success("Added to the cart");
    }
  };

  return (
    <>
      <Head>
        <meta
          name='description'
          content={`${product.title} | ${product.description} | price : $${product.price} the rate ${product.rating.rate} / 5 from ${product.rating.count} rates`}
        />
        <meta
          name='keywords'
          content={`M shop Product, ${product.category} , ${product.title} , buy ${product.title} , Buy ${product.title} , best ${product.title} , new ${product.title}, ${product.title} ${product.price}, get ${product.title} , Get ${product.title}`}
        />
        <meta name='author' content='Mohammad mahdi Kamran' />
        <title>M Shop Product | {product.title}</title>
      </Head>
      <main>
        <ToastContainer />
        <UserLocation lastParam={product.title} />
        <AddToCartFunctionality.Provider value={addProductToCart}>
          <ProductDetail product={product} />
        </AddToCartFunctionality.Provider>
        <div className='border border-slate-300 mx-16 my-8'>
          <Possibilities possibilities={possibilities} />
        </div>
        <MayInterested products={interestedInData} />
      </main>
    </>
  );
};

export default ProductPage;

export const getStaticPaths = async () => {
  const [data] = await dataFetcher("products");
  // makes an array of objects that every object has
  // params key and the value of the params key is an object with productId and category keys
  const pathes: Pathes = data?.map((product: any) => {
    return {
      params: {
        productId: product.id.toString(),
        category: categories[product.category],
      },
    };
  });

  return {
    paths: pathes,
    fallback: false,
  };
};

export const getStaticProps = async (context: any) => {
  const { productId } = context.params;
  const [data, error] = await dataFetcher(`products/${productId}`);

  const [products, ProductError] = await dataFetcher("products");

  const interestedInData = newestGoods(products.slice(8, 20));

  if (error || ProductError) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
  return {
    props: {
      product: {
        ...data,
        image: [data.image],
        discountPercent: discountPercentHandler(),
      },
      interestedInData,
    },
  };
};
