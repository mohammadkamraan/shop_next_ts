import type { NextPage } from "next";
import Head from "next/head";
import Possibilities from "../src/components/possibilities/Possibilities";
import SpecialOffers from "../src/components/specialOffers/SpecialOffers";

import { dataFetcher } from "../src/util/requestHandlers";
import CategoryOfGoods from "../src/components/categoryOfGoods/CategoryOfGoods";
import CategoriesSlider from "../src/components/categoriesSlider/CategoriesSlider";
import NewestGoods from "../src/components/newestGoods/NewestGoods";

import { newestGoods } from "../src/util/newestGoods";
import SpecialSale from "../src/components/specialSale/SpecialSale";

import { specialSales } from "../src/data/specialSalesData/specialSalesData";
import { popularBrands } from "../src/data/popularBrandsData/popularBrandsData";
import PopularBrands from "../src/components/popularBrands/PopularBrands";

import { largCategoryOfGoodsData } from "../src/data/categoryOfGoodsData/largCategoryOfGoodData";
import { categoryOfGoodsDataInSmallMode } from "../src/data/categoryOfGoodsData/categoryOfGoodsData";
import { possibilities } from "../src/data/possibilitiesData/possibilitiesData";

import { Product } from "../src/typescript/INterfaces";

interface HomeProps {
  products: Product[];
  newestGoodsData: Product[];
}

const Home: NextPage<HomeProps> = ({ products, newestGoodsData }) => {
  return (
    <>
      <Head>
        <meta name='description' content='Nextjs online shop github project' />
        <meta
          name='keywords'
          content='HTML,Tailwincss,Javascript,Reactjs,Nextjs,Redux,Redux-toolkit'
        />
        <meta name='author' content='Mohammad mahdi Kamran' />
        <title>M Shop</title>
      </Head>
      <CategoriesSlider />
      <Possibilities possibilities={possibilities} />
      <SpecialOffers products={newestGoodsData} />
      <CategoryOfGoods
        categoriesInLargeMode={largCategoryOfGoodsData}
        categoriesInSmallMode={categoryOfGoodsDataInSmallMode}
      />
      <NewestGoods goods={newestGoodsData} />
      <SpecialSale sales={specialSales} />
      <PopularBrands brands={popularBrands} />
    </>
  );
};

export const getStaticProps = async () => {
  const [data, error] = await dataFetcher("products");
  if (error) {
    return {
      redirect: {
        destination: "/500",
        permanent: false,
      },
    };
  }
  const newestGoodsData = newestGoods(data.slice(8, 20));
  return {
    props: {
      products: data,
      newestGoodsData,
    },
  };
};

export default Home;
