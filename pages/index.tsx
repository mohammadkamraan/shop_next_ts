import type { NextPage } from "next";
import Head from "next/head";
import Possibilities from "../src/components/possibilities/Possibilities";
import SpecialOffers from "../src/components/specialOffers/SpecialOffers";
import AllProductsContext from "../src/context/AllProductsContext";

import { dataFetcher } from "../src/util/requestHandlers";
import CategoryOfGoods from "../src/components/categoryOfGoods/CategoryOfGoods";
import CategoriesSlider from "../src/components/categoriesSlider/CategoriesSlider";
import NewestGoods from "../src/components/newestGoods/NewestGoods";

import { newestGoods } from "../src/util/newestGoods";
import SpecialSale from "../src/components/specialSale/SpecialSale";

import { specialSales } from "../src/data/specialSalesData/specialSalesData";
import { popularBrands } from "../src/data/popularBrandsData/popularBrandsData";
import PopularBrands from "../src/components/popularBrands/PopularBrands";
import { useState } from "react";

const Home: NextPage<any> = ({ products, newestGoodsData }) => {
  const [index, setIndex] = useState(0);
  const clickHandler = () => {
    setIndex(preveIndex => preveIndex + 1);
  };
  return (
    <AllProductsContext.Provider value={{ allProducts: products }}>
      <Head>
        <meta name='description' content='Nextjs online shop github project' />
        <meta name='keywords' content='HTML,Tailwincss,Javascript,Reactjs,Nextjs,Redux,Redux-toolkit' />
        <meta name='author' content='Mohammad mahdi Kamran' />
        <title>M Shop</title>
      </Head>
      <button onClick={clickHandler}>Click</button>
      <CategoriesSlider />
      <Possibilities />
      <SpecialOffers />
      <CategoryOfGoods />
      <NewestGoods goods={newestGoodsData} />
      <SpecialSale sales={specialSales} />
      <PopularBrands brands={popularBrands} />
    </AllProductsContext.Provider>
  );
};

export const getStaticProps = async () => {
  const data = await dataFetcher("products");
  const newestGoodsData = newestGoods(data.slice(8, 20));
  return {
    props: {
      products: data,
      newestGoodsData,
    },
  };
};

export default Home;
