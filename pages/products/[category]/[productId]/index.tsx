import { NextPage, GetStaticPaths } from "next";
import { dataFetcher } from "../../../../src/util/requestHandlers";

type Categories =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

interface Params {
  productId: string;
  category: Categories;
}

interface Pathes {
  params: ReadonlyArray<Params>;
}

const Product: NextPage<any> = ({ product }) => {
  console.log(product);
  return <></>;
};

export default Product;

export const getStaticPaths = async () => {
  const [data, error] = await dataFetcher("products");

  const pathes: Pathes = data.map((product: any) => {
    return {
      params: { productId: product.id.toString(), category: product.category },
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
      product: data,
    },
  };
};
