import { FC, memo } from "react";
import { CartObject } from "../../typescript/INterfaces";

import CartItem from "../cartItem/CartItem";
import ListCreator from "../listCreator/ListCreator";
import OrderSummary from "../orderSummary/OrderSummary";

interface CartContentProps {
  cartData: CartObject;
}

const CartContent: FC<CartContentProps> = ({ cartData }) => {
  return (
    <section className='relative flex flex-col md:flex-row px-0 md:px-16 w-full'>
      <div className='w-full md:w-8/12 mr-5'>
        <ListCreator
          itemComponent={CartItem}
          itemPropsName='cartItem'
          items={[...cartData.cartItems]}
        />
      </div>
      <OrderSummary
        quantity={cartData.totalAmount}
        totalPrice={cartData.totalPrice}
        style='sticky bottom-0 right-0 left-0 md:top-36 md:w-4/12 w-[100vw] h-48 md:h-72 px-8 py-4 md:py-12 dark:bg-slate-800 bg-white'
      />
    </section>
  );
};

export default memo(CartContent);
