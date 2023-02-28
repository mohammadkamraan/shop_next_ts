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
      className='flex flex-col justify-center md:justify-between md:flex-row md:items-center mb-3 md:px-10 border-b-2 border-slate-300 h-72 md:h-40'
    >
      <div className='h-full flex md:items-center'>
        <figure className='w-32 h-32 rounded-md overflow-hidden'>
          <img
            className='w-full h-full'
            src={image as string}
            alt={title + "image"}
          />
        </figure>
        <p className='w-56 sm:ml-20'>{title}</p>
      </div>
      <div className='h-full flex items-center w-4/12 justify-between'>
        <div className='w-24 h-12 flex items-center justify-between'>
          <button>+</button>
          <input
            className='w-14 h-full text-center'
            type='number'
            value={count}
          />
          <button>
            {count === 1 ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 text-red-500'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                />
              </svg>
            ) : (
              "-"
            )}
          </button>
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
