import { FC, memo } from "react";
import { Product } from "../../typescript/INterfaces";

import ScrollAbleCards from "../generalProductCards/scrollAbleCards/ScrollAbleCards";

interface MayInterestedProps {
  products: Product[];
}

const MayInterested: FC<MayInterestedProps> = ({ products }) => {
  return <ScrollAbleCards products={products} type='interested' />;
};

export default memo(MayInterested);
