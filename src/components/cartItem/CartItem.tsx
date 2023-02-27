import { FC } from "react";

interface CartItemProps {
  image: string;
  title: string;
  amount: number;
  price: number;
  discount: number;
}

const CartItem: FC<CartItemProps> = ({
  image,
  title,
  amount,
  price,
  discount,
}) => {
  return (
    <article
      role='cart-item'
      className='flex flex-col justify-center md:flex-col md:items-center'
    >
      <figure>
        <img src={image} alt={title + "image"} />
      </figure>
      <p>{title}</p>
      <div className='h-full flex items-center'>
        <div>
          <input type='number' value={amount} />
        </div>
        <div className='flex flex-col'>
          <p>Total Amount</p>
          <p>$ {price * 2}</p>
          <p>$ {price}</p>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
