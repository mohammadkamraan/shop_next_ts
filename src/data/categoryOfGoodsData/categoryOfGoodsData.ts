import {
  ICategoryOfGoodInSmallMode,
  ClientProductsCategories,
} from "../../typescript/INterfaces";

import beautyCategoryIcon from "../../../public/images/category-icon/beauty-category.webp";
import digitalCategoryIcon from "../../../public/images/category-icon/digital-category.webp";
import fashionCategoryIcon from "../../../public/images/category-icon/fashion-category.webp";
import houseCategoryIcon from "../../../public/images/category-icon/house-category.webp";
import sportCatergoryIcon from "../../../public/images/category-icon/sport-category.webp";
import stationeryCategoryIcon from "../../../public/images/category-icon/stationery-category.webp";
import toyCategoryIcon from "../../../public/images/category-icon/toy-category.webp";

export const categoryOfGoodsDataInSmallMode: ICategoryOfGoodInSmallMode[] = [
  {
    categoryLink: "/",
    categoryName: "Fashin and Clothes",
    svg: digitalCategoryIcon,
  },
  {
    categoryLink: "/",
    categoryName: "Cosmetic Products",
    svg: fashionCategoryIcon,
  },
  {
    categoryLink: "/",
    categoryName: "Sport and Trip",
    svg: beautyCategoryIcon,
  },
  {
    categoryLink: "/",
    categoryName: "Furniture and kitchen",
    svg: sportCatergoryIcon,
  },
  { categoryLink: "/", categoryName: "Toys and Baby", svg: houseCategoryIcon },
  { categoryLink: "/", categoryName: "Digital Products", svg: toyCategoryIcon },
  {
    categoryLink: "/",
    categoryName: "Books, Stationery and Art",
    svg: stationeryCategoryIcon,
  },
];

export const categories: ClientProductsCategories = {
  "men's clothing": "menCloth",
  "women's clothing": "womenCloth",
  jewelery: "jewelery",
  electronics: "electronics",
};
