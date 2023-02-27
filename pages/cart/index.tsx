import { NextPage } from "next";
import Head from "next/head";
import OrderSummary from "../../src/components/orderSummary/OrderSummary";
import UserLocation from "../../src/components/userLocation/UserLocation";
import useCartStore from "../../src/hooks/useCartStore";

const Cart: NextPage = () => {
  const cartItems = useCartStore((state: any) => state.cartItems);

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
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
        <OrderSummary
          quantity={5}
          totalPrice={5000}
          style='sticky bottom-0 right-0 left-0 md:top-36 md:bottom w-4/12'
        />
      </section>
    </main>
  );
};

export default Cart;
