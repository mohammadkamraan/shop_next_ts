import { NextPage } from "next";
import Head from "next/head";
import ListCreator from "../../src/components/listCreator/ListCreator";
import OrderSummary from "../../src/components/orderSummary/OrderSummary";
import UserLocation from "../../src/components/userLocation/UserLocation";
import useCartStore, { CartStore } from "../../src/hooks/useCartStore";
import CartItem from "../../src/components/cartItem/CartItem";

const Cart: NextPage = () => {
  const cartData = useCartStore((state: CartStore) => state.cartData);

  return (
    <main>
      <Head>
        <title>M Shop | Cart</title>
        <meta name='description' content='M Shop cart page' />
        <meta
          name='keywords'
          content='M Shop cart page , cart page, user cart'
        />
        <meta name='author' content='Mohammad mahdi kamran talab' />
      </Head>
      <UserLocation />
      <section className='relative flex flex-col md:flex-row px-16'>
        <div className='w-8/12 mr-5'>
          <ListCreator
            itemComponent={CartItem}
            itemPropsName='cartItem'
            items={cartData.cartItems}
          />
        </div>
        <OrderSummary
          quantity={cartData.totalAmount}
          totalPrice={cartData.totalPrice}
          style='sticky bottom-0 right-0 left-0 md:top-36 md:bottom w-3/12'
        />
      </section>
    </main>
  );
};

export default Cart;
