import { ICategoryOfGood } from "../../typescript/INterfaces";

import beautyCategoryImage from "../../../public/images/categoryImages/beauty-category.webp";
import digitalCategoryImage from "../../../public/images/categoryImages/digital-category.webp";
import fashionCategoryImage from "../../../public/images/categoryImages/fashion-category.webp";
import houseCategoryImage from "../../../public/images/categoryImages/house-category.webp";
import sportCatergoryImage from "../../../public/images/categoryImages/sport-category.webp";
import stationeryCategoryImage from "../../../public/images/categoryImages/stationery-category.webp";
import toyCategoryImage from "../../../public/images/categoryImages/toy-category.webp";

export const categoryOfGoodsData: ICategoryOfGood[] = [
  {
    backgroundColor: "bg-sky-500",
    cardHeader: "Digital Products",
    paragraph: "We offer the newest products at the most competitive prices",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-6",
    gridCoulsClassName: "col-span-3",
    image: digitalCategoryImage,
    imageOrder: 2,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-rose-400",
    cardHeader: "Fashion and Clothes",
    paragraph: "The most popular brands with the most reasonable prices",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-6",
    gridCoulsClassName: "col-span-3",
    image: fashionCategoryImage,
    imageOrder: 2,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-amber-500",
    cardHeader: "Cosmetic Products",
    paragraph: "Anti-allergy products suitable for all skin types from reputable brands",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-3",
    gridCoulsClassName: "col-span-3",
    image: beautyCategoryImage,
    imageOrder: 2,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-amber-300",
    cardHeader: "Sport and Trip",
    paragraph: "High-quality and durable products",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-3",
    gridCoulsClassName: "col-span-3",
    image: sportCatergoryImage,
    imageOrder: 1,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-lime-700",
    cardHeader: "Furniture and kitchen",
    paragraph: "In accordance with the designs of the day",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-6",
    gridCoulsClassName: "col-span-5",
    image: houseCategoryImage,
    imageOrder: 2,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-teal-400",
    cardHeader: "Toys and Baby",
    paragraph: "A combination of entertainment and creativity",
    flexDiracion: "flex-col",
    gridRowsClassName: "row-span-6",
    gridCoulsClassName: "col-span-2",
    image: toyCategoryImage,
    imageOrder: 2,
    productsLink: "/",
  },
  {
    backgroundColor: "bg-orange-400",
    cardHeader: "Books, Stationery and Art",
    paragraph: "Variety in choice",
    flexDiracion: "flex-row",
    gridRowsClassName: "row-span-6",
    gridCoulsClassName: "col-span-2",
    image: stationeryCategoryImage,
    imageOrder: 2,
    productsLink: "/",
  },
];
