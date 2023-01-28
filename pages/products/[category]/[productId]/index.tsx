import { NextPage } from "next";
import Head from "next/head";

import { dataFetcher } from "../../../../src/util/requestHandlers";
import { categories } from "../../../../src/data/categoryOfGoodsData/categoryOfGoodsData";

import { ClientSideCategorie } from "../../../../src/typescript/types";
import UserLocation from "../../../../src/components/userLocation/UserLocation";
import ProductDetail from "../../../../src/components/productDetail/ProductDetail";

import { Product } from "../../../../src/typescript/INterfaces";
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

export interface ProductProps {
  product: Product;
}

const Product: NextPage<ProductProps> = ({ product }) => {
  console.log(product);
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
      <UserLocation lastParam={product.title} />
      <ProductDetail product={product} />
    </>
  );
};

export default Product;

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

  if (error) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
  return {
    props: {
      product: { ...data, image: [data.image] },
    },
  };
};
