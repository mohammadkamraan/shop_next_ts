import type { NextPage } from "next";
import Head from "next/head";

import Possibilities from "../src/components/shop/possibilities/Possibilities";
import SpecialOffers from "../src/components/shop/specialOffers/SpecialOffers";
import CategoryOfGoods from "../src/components/shop/categoryOfGoods/CategoryOfGoods";
import CategoriesSlider from "../src/components/categoriesSlider/CategoriesSlider";
import NewestGoods from "../src/components/shop/newestGoods/NewestGoods";
import SpecialSale from "../src/components/shop/specialSale/SpecialSale";
import PopularBrands from "../src/components/shop/popularBrands/PopularBrands";

import { requestHandler } from "../src/util/requestHandlers";
import { newestGoods } from "../src/util/newestGoods";

import { specialSales } from "../src/data/specialSalesData/specialSalesData";
import { popularBrands } from "../src/data/popularBrandsData/popularBrandsData";
import { largCategoryOfGoodsData } from "../src/data/categoryOfGoodsData/largCategoryOfGoodData";
import { categoryOfGoodsDataInSmallMode } from "../src/data/categoryOfGoodsData/categoryOfGoodsData";
import { possibilities } from "../src/data/possibilitiesData/possibilitiesData";

import { EndPoints } from "../src/constants";

import { Product } from "../src/typescript/Interfaces";
import CategorySlide from "../src/components/categoriesSlider/categorySlide/CategorySlide";

interface HomeProps {
  newestGoodsData: Product[];
}

const Home: NextPage<HomeProps> = ({ newestGoodsData }) => {
  return (
    <>
      <Head>
        <meta name='description' content='Nextjs online shop github project' />
        <meta
          name='keywords'
          content='HTML,Tailwindcss,Javascript,Reactjs,Nextjs,zustand'
        />
        <meta name='author' content='Mohammad mahdi Kamran' />
        <title>M Shop</title>
      </Head>
      <CategoriesSlider>
        <CategorySlide
          header='Beauty and Comfort'
          image='bg-[url("../public/images/fashion-banner.webp")]'
        >
          You will find the best fabrics, the hottest designs,
          <br /> and the most popular brands at reasonable prices.
          <br /> Look your best and stand out among the crowd.
        </CategorySlide>
        <CategorySlide
          header='Have the best Experiences'
          image='bg-[url(../public/images/digital-banner.webp)]'
        >
          We provide the best Experience with the most popular Brands
          <br />. With a warranty of 18 months
          <br />, you can be confident in your choice
        </CategorySlide>
      </CategoriesSlider>
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
  const [data, error] = await requestHandler<Product[]>({
    method: "GET",
    url: EndPoints.PRODUCTS,
  });
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
      newestGoodsData,
    },
  };
};

export default Home;
