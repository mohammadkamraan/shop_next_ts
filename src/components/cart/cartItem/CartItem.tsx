import { FC } from "react";

import ProductAmountInput from "../../UI/productAmountInput/ProductAmountInput";

import { CartItem } from "../../../typescript/Interfaces";
import type { ChangeCartItemAmmount } from "../../../store/useCartStore";

interface CartItemProps {
  cartItem: CartItem;
  index: number;
  incraseCartItemAmount: ChangeCartItemAmmount;
  decriseCartItemAmount: ChangeCartItemAmmount;
}

const CartItem: FC<CartItemProps> = ({
  cartItem,
  index,
  incraseCartItemAmount,
  decriseCartItemAmount,
}) => {
  const { image, title, count, price, discountedPrice, discountPercent } =
    cartItem;

  return (
    <article
      role='cart-item'
      className='flex flex-col justify-center md:justify-between lg:flex-row lg:items-center mb-3 md:px-10 border-b-2 border-slate-300 h-72 lg:h-40'
    >
      <div className='h-full flex flex-col sm:flex-row sm:items-center sm:justify-around'>
        <figure className='w-32 h-32 rounded-md overflow-hidden mx-auto sm:mx-0'>
          <img
            className='w-full h-full'
            src={image as string}
            alt={title + "image"}
          />
        </figure>
        <p className='w-full text-center sm:text-right mt-3 sm:mt-0 sm:mx-0 sm:w-56 sm:ml-20'>
          {title}
        </p>
      </div>
      <div className='h-full flex items-center w-full lg:w-4/12 md:justify-between justify-around'>
        <div>
          <ProductAmountInput
            value={count}
            incraseHandler={() =>
              incraseCartItemAmount(
                index,
                discountPercent ? discountPercent : price
              )
            }
            decriseHandler={() =>
              decriseCartItemAmount(
                index,
                discountPercent ? discountPercent : price
              )
            }
            onChange={() => {
              console.log("hello");
            }}
            isRemoveAble={true}
            styles='w-24 h-12'
          />
        </div>
        <div className='flex flex-col'>
          <p>Total Amount</p>
          <p className='text-rose-400 line-through text-sm'>
            $ {price * count}
          </p>
          <p className='font-bold'>
            $ {discountedPrice * count}
            <span className='dark:text-green-400 text-teal-700 text-sm font-thin'>
              (-{discountPercent}%)
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
