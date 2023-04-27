import { FC, memo } from "react";
import { CartObject } from "../../../typescript/AppInterfaces";

import CartItem from "../cartItem/CartItem";
import ListCreator from "../../listCreator/ListCreator";
import OrderSummary from "../orderSummary/OrderSummary";
import useCartStore from "../../../store/useCartStore";

interface CartContentProps {
  cartData: CartObject;
  onClick: () => void;
  loading?: boolean;
}

const CartContent: FC<CartContentProps> = ({ cartData, onClick, loading }) => {
  const { decriseCartItemAmount, incraseCartItemAmount } = useCartStore();
  return (
    <section className='relative flex flex-col md:flex-row px-0 md:px-16 w-full'>
      <div className='w-full md:w-8/12 mr-5'>
        <ListCreator
          itemComponent={CartItem}
          itemPropsName='cartItem'
          items={[...cartData.cartItems]}
          extraProps={{ decriseCartItemAmount, incraseCartItemAmount }}
        />
      </div>
      <OrderSummary
        loading={loading}
        onClick={onClick}
        quantity={cartData.totalAmount}
        totalPrice={cartData.totalPrice}
        style='sticky bottom-0 right-0 left-0 md:top-36 md:w-4/12 w-[100vw] h-48 md:h-72 px-8 py-4 md:py-12 dark:bg-slate-800 bg-white'
      />
    </section>
  );
};

export default memo(CartContent);
