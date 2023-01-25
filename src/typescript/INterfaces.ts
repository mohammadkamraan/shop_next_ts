// typescript type
import type {
  tailwindGridRows,
  tailwindGridCols,
  ClientSideCategorie,
} from "./types";

import type { Categories } from "../../pages/products/[category]/[productId]/index";

export interface IGridSystemItem {
  gridRowsClassName: tailwindGridRows;
  gridRowsClassNameInSmMode?: tailwindGridRows;
  gridRowsClassNameInMdMode?: tailwindGridRows;
  gridRowsClassNameInLgMode?: tailwindGridRows;
  gridRowsClassNameInXlMode?: tailwindGridRows;
  gridRowsClassNameIn2xlMode?: tailwindGridRows;
  gridCoulsClassName: tailwindGridCols;
  gridCoulsClassNameInSmMode?: tailwindGridCols;
  gridCoulsClassNameInMdMode?: tailwindGridCols;
  gridCoulsClassNameInLgMode?: tailwindGridCols;
  gridCoulsClassNameInXlMode?: tailwindGridCols;
  gridCoulsClassNameIn2xlMode?: tailwindGridCols;
}

interface ICategoryOfGoodImage {
  imageAddress: any;
  imageWidth: number;
  imageHeight: number;
}

export interface ICategoryOfGood extends IGridSystemItem {
  cardHeader: string;
  paragraph: string;
  productsLink: string;
  image: ICategoryOfGoodImage;
  imageOrder: 1 | 2;
  flexDiracion: "flex-row" | "flex-col";
  backgroundColor: string;
  darkModeBackground: string;
}

export interface ICategoryOfGoodInSmallMode {
  svg: any;
  categoryLink: string;
  categoryName: string;
}

// the backend side categories type

export interface ProductsCategories {
  [key: string]: Categories;
}

export interface ClientProductsCategories {
  [key: string]: ClientSideCategorie;
}
