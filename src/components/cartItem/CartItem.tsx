import { FC } from "react";
import { CartItem } from "../../typescript/INterfaces";

interface CartItemProps {
  cartItem: CartItem;
}

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { image, title, count, price, discountedPrice, discountPercent } =
    cartItem;
  return (
    <article
      role='cart-item'
      className='flex flex-col justify-center md:justify-between md:flex-row md:items-center mb-3 md:px-10 border-b-2 border-slate-300 h-40'
    >
      <figure className='w-32 h-32 rounded-md overflow-hidden'>
        <img
          className='w-full h-full'
          src={image as string}
          alt={title + "image"}
        />
      </figure>
      <p className='w-56'>{title}</p>
      <div className='h-full flex items-center w-4/12 justify-between'>
        <div className='w-16 h-12'>
          <input
            className='w-full h-full text-center'
            type='number'
            value={count}
          />
        </div>
        <div className='flex flex-col'>
          <p>Total Amount</p>
          <p className='text-rose-400 line-through text-sm'>
            $ {price * count}
          </p>
          <p className='font-bold'>
            $ {discountedPrice * count}
            <span className='text-green-400 text-sm font-thin'>
              (-{discountPercent}%)
            </span>
          </p>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
