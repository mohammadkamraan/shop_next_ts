import { FC } from "react";
import ProductImages from "./ProductImage/ProductImages";

import { ProductProps } from "../../../pages/products/[category]/[productId]/index";
import ProductData from "./productData/ProductData";
const ProductDetail: FC<ProductProps> = ({ product }) => {
  return (
    <article role='product-detail' className='flex flex-col md:flex-row'>
      <ProductImages images={product.image as string[]} />
      <ProductData productData={product} />
    </article>
  );
};

export default ProductDetail;
