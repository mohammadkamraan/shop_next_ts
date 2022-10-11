import { ICategoryOfGood } from "../../typescript/INterfaces";

import beautyCategoryImage from "../../../public/images/categoryImages/beauty-category.webp";
import digitalCategoryImage from "../../../public/images/categoryImages/digital-category.webp";

export const categoryOfGoodsData: ICategoryOfGood[] = [
  {
    backgroundColor: "bg-sky-500",
    cardHeader: "Digital Products",
    paragraph: "We offer the newest products at the most competitive prices",
    flexDiracion: "row",
    gridRowsClassName: "row-span-6",
    image: digitalCategoryImage,
    imageOrder: 2,
    productsLink: "/",
    gridCoulsClassName: "col-span-3",
  },
];
