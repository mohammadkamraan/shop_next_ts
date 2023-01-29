import { FC } from "react";
import ProductImages from "./ProductImage/ProductImages";

import { ProductProps } from "../../../pages/products/[category]/[productId]/index";
import ProductData from "./productData/ProductData";
const ProductDetail: FC<ProductProps> = ({ product }) => {
  return (
    <section
      role='product-detail'
      className='flex flex-col md:flex-row md:justify-evenly md:items-start md:pr-16 md:pl-28 mt-8'
    >
      <ProductImages images={product.image as string[]} />
      <ProductData productData={product} />
    </section>
  );
};

export default ProductDetail;
