import { FC } from "react";
import useCartStore from "../../../../store/useCartStore";
import ProductAmountInput from "../../../UI/productAmountInput/ProductAmountInput";
import ProductPrice from "../../../UI/productPrice/ProductPrice";

import { CartItem } from "../../../../typescript/AppInterfaces";

interface CartOverviewItemProps {
  cartItem: CartItem;
  index: number;
}

const CartOverviewItem: FC<CartOverviewItemProps> = ({ cartItem, index }) => {
  const { decriseCartItemAmount, incraseCartItemAmount } = useCartStore();
  return (
    <div>
      <div className='flex items-center justify-around w-full px-6'>
        <img src={cartItem.image as string} className='w-20 h-32' />
        <p className='text-slate-700 dark:text-slate-300 text-center px-3'>
          {cartItem.title}
        </p>
      </div>
      <div className='flex px-4 w-full justify-around'>
        <ProductAmountInput
          styles='w-24 h-24 text-slate-700 dark:text-slate-400 text-xl'
          value={cartItem.count}
          isRemoveAble={true}
          decriseHandler={() => {
            decriseCartItemAmount(index, cartItem.discountedPrice);
          }}
          incraseHandler={() => {
            incraseCartItemAmount(index, cartItem.discountedPrice);
          }}
          onChange={() => {
            console.log("changed");
          }}
        />
        <div>
          <p className='text-slate-700 dark:text-slate-400 text-lg'>
            Total Amount
          </p>
          <ProductPrice
            discount={cartItem.discountPercent || 0}
            price={cartItem.discountedPrice}
          />
        </div>
      </div>
      <hr className='bg-slate-600 dark:bg-slate-200 w-full px-3 my-2' />
    </div>
  );
};

export default CartOverviewItem;
