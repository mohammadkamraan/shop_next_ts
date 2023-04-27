import { NextPage } from "next";
import Head from "next/head";
import { useSession } from "next-auth/react";

import { ToastContainer } from "react-toastify";

import { AddToCartFunctionality } from "../../../../src/context/AddToCartFunctionality";

import { requestHandler } from "../../../../src/util/requestHandlers";
import { discountPercentHandler } from "../../../../src/util/discountHandler";
import { newestGoods } from "../../../../src/util/newestGoods";
import { addProductToCartHandler } from "../../../../src/util/addProductToCart";

import { categories } from "../../../../src/data/categoryOfGoodsData/categoryOfGoodsData";
import { possibilities } from "../../../../src/data/possibilitiesData/possibilitiesData";

import useCartStore from "../../../../src/store/useCartStore";

import { ClientSideCategorie } from "../../../../src/typescript/types";
import UserLocation from "../../../../src/components/UI/userLocation/UserLocation";
import ProductDetail from "../../../../src/components/shop/productDetail/ProductDetail";
import Possibilities from "../../../../src/components/shop/possibilities/Possibilities";
import MayInterested from "../../../../src/components/shop/MayInterested/MayInterested";

import { ProductDetailProps } from "../../../../src/components/shop/productDetail/ProductDetail";
import { Product } from "../../../../src/typescript/Interfaces";

import "react-toastify/dist/ReactToastify.css";
import { EndPoints } from "../../../../src/constants";

export type Categories =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

interface Params {
  productId: string;
  category: ClientSideCategorie;
}

interface Path {
  params: Params;
}

interface ProductProps extends ProductDetailProps {
  interestedInData: Product[];
}

export type AddProductToCart = (count: number) => void;

const ProductPage: NextPage<ProductProps> = ({ product, interestedInData }) => {
  const addItemsToCart = useCartStore((state: any) => state.addItemsToCart);

  const { status } = useSession();

  const addProductToCart: AddProductToCart = count => {
    addProductToCartHandler({
      count,
      status,
      handler: addItemsToCart,
      product,
    });
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
  const [data, error] = await requestHandler<Product[]>({
    method: "GET",
    url: EndPoints.PRODUCTS,
  });

  let paths: Path[] = [];

  if (!error) {
    // makes an array of objects that every object has
    // params key and the value of the params key is an object with productId and category keys
    paths = data.map(product => {
      return {
        params: {
          productId: product.id.toString(),
          category: categories[product.category],
        },
      };
    });
  }

  return {
    paths,
    fallback: error ? true : false,
  };
};

export const getStaticProps = async (context: any) => {
  const { productId } = context.params;
  const [data, error] = await requestHandler<Product>({
    method: "GET",
    url: `${EndPoints.PRODUCTS}/${productId}`,
  });

  const [products, ProductError] = await requestHandler<Product[]>({
    method: "GET",
    url: EndPoints.PRODUCTS,
  });

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
