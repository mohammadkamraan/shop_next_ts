import { FC } from "react";
import GridSystem from "../gridSystem/GridSystem";
import LargeCategoryOfGoodItem from "./largeCategoryOfGoodsItem/LargeCategoryOfGoodsItem";

import SmallCategoryOfGoodItem from "./smallCategoryOfGoodItem/SmallCategoryOfGoodItem";

import { categoryOfGoodsDataInSmallMode } from "../../data/categoryOfGoodsData/categoryOfGoodsData";
import ListCreator from "../listCreator/ListCreator";

import beautyCategoryImage from "../../../public/images/categoryImages/beauty-category.webp";
import digitalCategoryImage from "../../../public/images/categoryImages/digital-category.webp";
import fashionCategoryImage from "../../../public/images/categoryImages/fashion-category.webp";
import houseCategoryImage from "../../../public/images/categoryImages/house-category.webp";
import sportCatergoryImage from "../../../public/images/categoryImages/sport-category.webp";
import stationeryCategoryImage from "../../../public/images/categoryImages/stationery-category.webp";
import toyCategoryImage from "../../../public/images/categoryImages/toy-category.webp";
import { ICategoryOfGood } from "../../typescript/INterfaces";

const categoryOfGoodsData: ICategoryOfGood[] = [
  {
    backgroundColor: "bg-sky-200",
    darkModeBackground: "dark:bg-sky-800",
    cardHeader: "Digital Products",
    paragraph: "We offer the newest products at the most competitive prices",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-4",
    gridCoulsClassName: "col-span-4",
    image: {
      imageAddress: digitalCategoryImage,
      imageWidth: 150,
      imageHeight: 200,
    },
    imageOrder: 2,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-rose-200",
    darkModeBackground: "dark:bg-orange-900",
    cardHeader: "Fashion and Clothes",
    paragraph: "The most popular brands with the most reasonable prices",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-4",
    gridCoulsClassName: "col-span-4",
    image: {
      imageAddress: fashionCategoryImage,
      imageWidth: 150,
      imageHeight: 200,
    },
    imageOrder: 2,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-amber-400",
    darkModeBackground: "dark:bg-fuchsia-900",
    cardHeader: "Cosmetic Products",
    paragraph: "Anti-allergy products suitable for all skin types from reputable brands",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-2",
    gridCoulsClassName: "col-span-4",
    image: {
      imageAddress: beautyCategoryImage,
      imageWidth: 100,
      imageHeight: 100,
    },
    imageOrder: 2,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-amber-300",
    darkModeBackground: "dark:bg-red-900",
    cardHeader: "Sport and Trip",
    paragraph: "High-quality and durable products",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-2",
    gridCoulsClassName: "col-span-4",
    image: {
      imageAddress: sportCatergoryImage,
      imageWidth: 150,
      imageHeight: 150,
    },
    imageOrder: 1,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-lime-700",
    darkModeBackground: "dark:bg-teal-800",
    cardHeader: "Furniture and kitchen",
    paragraph: "In accordance with the designs of the day",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-2",
    gridCoulsClassName: "col-span-6",
    image: {
      imageAddress: houseCategoryImage,
      imageWidth: 300,
      imageHeight: 170,
    },
    imageOrder: 2,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-teal-400",
    darkModeBackground: "dark:bg-fuchsia-800",
    cardHeader: "Toys and Baby",
    paragraph: "A combination of entertainment and creativity",
    flexDiracion: "flex-col",
    gridRowsClassName: "row-span-2",
    gridCoulsClassName: "col-span-3",
    image: {
      imageAddress: toyCategoryImage,
      imageWidth: 120,
      imageHeight: 70,
    },
    imageOrder: 2,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-orange-400",
    darkModeBackground: "dark:bg-yellow-900",
    cardHeader: "Books, Stationery and Art",
    paragraph: "Variety in choice",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-2",
    gridCoulsClassName: "col-span-3",
    image: {
      imageAddress: stationeryCategoryImage,
      imageWidth: 70,
      imageHeight: 120,
    },
    imageOrder: 2,
    productsLink: "/",
  },
];

const CategoryOfGoods: FC = () => {
  return (
    <section className='w-full h-4/6 font-patrick'>
      <header>
        <h6 className='text-slate-800 text-4xl text-center my-5 dark:text-slate-300'>Category of Goods</h6>
      </header>
      <div className='h-[75vh] px-16 py-2 hidden xl:block'>
        <GridSystem items={categoryOfGoodsData} itemComponent={LargeCategoryOfGoodItem} needRows={true} gap={4} />
      </div>
      <div className='flex flex-wrap justify-around items-center xl:hidden pt-6'>
        <ListCreator
          itemComponent={SmallCategoryOfGoodItem}
          itemPropsName='category'
          items={categoryOfGoodsDataInSmallMode}
        />
      </div>
    </section>
  );
};

export default CategoryOfGoods;
