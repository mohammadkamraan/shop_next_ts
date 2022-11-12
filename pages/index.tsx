import type { NextPage } from "next";
import Head from "next/head";
import Possibilities from "../src/components/possibilities/Possibilities";
import SpecialOffers from "../src/components/specialOffers/SpecialOffers";
import AllProductsContext from "../src/context/AllProductsContext";

import { dataFetcher } from "../src/util/dataFetcher";
import CategoryOfGoods from "../src/components/categoryOfGoods/CategoryOfGoods";
import CategoriesSlider from "../src/components/categoriesSlider/CategoriesSlider";

const Home: NextPage<any> = ({ products }) => {
  return (
    <AllProductsContext.Provider value={{ allProducts: products }}>
      <Head>
        <meta name='description' content='Nextjs online shop github project' />
        <meta name='keywords' content='HTML,Tailwincss,Javascript,Reactjs,Nextjs,Redux,Redux-toolkit' />
        <meta name='author' content='Mohammad mahdi Kamran' />
        <title>M Shop</title>
      </Head>
      <CategoriesSlider />
      <Possibilities />
      <SpecialOffers />
      <CategoryOfGoods />
    </AllProductsContext.Provider>
  );
};

export const getStaticProps = async () => {
  const data = await dataFetcher("products");
  return {
    props: {
      products: data,
    },
  };
};

export default Home;
