import { FC, memo } from "react";
import ProductImages from "./ProductImage/ProductImages";

import ProductData from "./productData/ProductData";
import { Product } from "../../typescript/INterfaces";

export interface ProductDetailProps {
  product: Product;
}

const ProductDetail: FC<ProductDetailProps> = ({ product }) => {
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

export default memo(ProductDetail);
