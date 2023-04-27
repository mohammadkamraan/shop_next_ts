import { FC, memo } from "react";

import Slider from "react-slick";
import GeneralProductCard from "../generalProductCard/GeneralProductCard";

import { specialProducts } from "../../../../data/slidersData/slidersData";
import { Product } from "../../../../typescript/AppInterfaces";

interface ScrollAbleCardsProps {
  products: Product[];
  type: "specialSale" | "interested";
}

const ScrollAbleCards: FC<ScrollAbleCardsProps> = ({ products, type }) => (
  <Slider {...specialProducts} className='slick-has-margin'>
    {products.map((product: Product) => (
      <GeneralProductCard key={product.id} type={type} product={product} />
    ))}
  </Slider>
);
export default memo(ScrollAbleCards);
