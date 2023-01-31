import Link from "next/link";
import { FC, useContext, memo } from "react";
import Slider from "react-slick";

import AllProductsContext from "../../../context/AllProductsContext";

// import slider setting
import { specialProducts } from "../../../data/slidersData/slidersData";

import { Product } from "../../../typescript/INterfaces";
import GeneralProductCard from "../../generalProductCard/GeneralProductCard";

const ProductsSection: FC = () => {
  const contextData = useContext(AllProductsContext);

  return (
    <Slider {...specialProducts} className='slick-has-margin'>
      {contextData?.allProducts?.slice(0, 10)?.map((product: Product) => (
        <GeneralProductCard product={product} />
      ))}
    </Slider>
  );
};

export default memo(ProductsSection);
