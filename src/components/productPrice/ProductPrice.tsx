import { FC } from "react";
import ConditionalRenderer from "../conditionalRenderer/ConditionalRenderer";

interface Price {
  price: number;
}
interface ProductPriceProps extends Price {
  discount: number;
}

const PriceHasDiscount: FC<ProductPriceProps> = ({ price, discount }) => {
  return (
    <>
      <p className='text-rose-600 dark:text-rose-400 font-thin line-through sm:text-lg'>
        ${price}
      </p>
      <div className='flex'>
        <p className='text-slate-700 dark:text-neutral-300 font-black text-lg sm:text-2xl'>
          ${(price - (price / 100) * (discount as number)).toFixed(2)}
        </p>
        <span className='pl-1 pt-3 font-thin text-green-800 dark:text-teal-600'>
          (-%{discount})
        </span>
      </div>
    </>
  );
};

const NoDiscount: FC<Price> = ({ price }) => {
  return (
    <p className='text-slate-700 dark:text-neutral-300 font-black text-2xl'>
      ${price}
    </p>
  );
};

const ProductPrice: FC<ProductPriceProps> = ({ discount, price }) => {
  return (
    <ConditionalRenderer
      condition={!!discount}
      whenConditionIsFalse={<NoDiscount price={price} />}
      whenConditionIsTrue={
        <PriceHasDiscount price={price} discount={discount} />
      }
    />
  );
};

export default ProductPrice;
