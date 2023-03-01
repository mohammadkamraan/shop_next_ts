import { NextPage } from "next";
import Head from "next/head";
import ListCreator from "../../src/components/listCreator/ListCreator";
import OrderSummary from "../../src/components/orderSummary/OrderSummary";
import UserLocation from "../../src/components/userLocation/UserLocation";
import useCartStore, { CartStore } from "../../src/hooks/useCartStore";
import CartItem from "../../src/components/cartItem/CartItem";

const Cart: NextPage = () => {
  const cartData = useCartStore((state: CartStore) => state.cartData);

  console.log(cartData.cartItems);

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
    </main>
  );
};

export default Cart;
