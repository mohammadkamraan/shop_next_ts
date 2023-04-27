// typescript type
import type {
  tailwindGridRows,
  tailwindGridCols,
  ClientSideCategorie,
  FormReset,
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

interface ProductRating {
  rate: number;
  count: number;
}

export interface Product {
  category: string;
  description: string;
  id: number;
  image: string | string[];
  price: number;
  rating: ProductRating;
  title: string;
  discountPercent?: number;
}

export interface CartItem extends Product {
  count: number;
  discountedPrice: number;
}

export interface ServerCartData {
  productId: number;
  quantity: number;
}
export interface CartObject {
  cartItems: CartItem[];
  totalAmount: number;
  totalPrice: number;
  serverCartData: ServerCartData[];
}

export interface FavoriteData {
  favorites: Product[];
  favoritesId: number[] | string[];
}

export interface FormControlStateOptions {
  value: any;
  validators?: any[];
  isValid: boolean;
  isTouched: boolean;
  validation: any;
  isDirty: boolean;
}

export interface FormControlState {
  reset: FormReset | any;
  isValid: boolean | any;
  [key: string]: FormControlStateOptions | any;
}

export interface FormControlAction {
  name: string;
  value: string;
  isTouched: boolean;
  isDirty: boolean;
}

export interface FormControlCreatorArgument {
  value: string;
  name: string;
  validators?: any[];
}
