import { FC, memo } from "react";
import { Product } from "../../../typescript/AppInterfaces";

import ScrollAbleCards from "../../UI/generalProductCards/scrollAbleCards/ScrollAbleCards";

interface MayInterestedProps {
  products: Product[];
}

const MayInterested: FC<MayInterestedProps> = ({ products }) => {
  return (
    <section>
      <h4 className='ml-16 mb-5 font-black font-patrick text-2xl'>
        You May Be Interested In
      </h4>
      <div className='px-20'>
        <ScrollAbleCards products={products} type='interested' />
      </div>
    </section>
  );
};

export default memo(MayInterested);
