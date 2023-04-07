import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useCallback, useEffect, useLayoutEffect } from "react";

import useCartStore, { CartStore } from "../../src/store/useCartStore";

import UserLocation from "../../src/components/userLocation/UserLocation";
import CartContent from "../../src/components/cartContent/CartContent";
import ConditionalRenderer from "../../src/components/conditionalRenderer/ConditionalRenderer";
import { useSend } from "../../src/hooks/useSend";
import { toast, ToastContainer } from "react-toastify";

const Cart: NextPage = () => {
  const cartData = useCartStore((state: CartStore) => state.cartData);
  const removeCartData = useCartStore(
    (state: CartStore) => state.clearCartData
  );
  const authentication: any = useSession();

  const [loading, response, error, sender] = useSend();

  const router = useRouter();

  const orderCartHandler = useCallback(async () => {
    await sender({
      endPoint: "carts",
      body: {
        products: cartData.serverCartData,
        userId: authentication.data?.user?.id,
        date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      },
      method: "POST",
    });
  }, [cartData.serverCartData.length]);

  useLayoutEffect(() => {
    if (authentication.status === "unauthenticated") {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    if (response) {
      toast.success("Successfuly ordered.", {
        position: toast.POSITION.TOP_RIGHT,
      });
      removeCartData();
    }
    if (error) {
      toast.error("Falid to order please try again later.", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  }, [response, error]);

  return (
    <>
      <Head>
        <title>M Shop | Cart</title>
        <meta name='description' content='M Shop cart page' />
        <meta
          name='keywords'
          content='M Shop cart page , cart page, user cart'
        />
        <meta name='author' content='Mohammad mahdi kamran talab' />
      </Head>
      <main>
        <UserLocation />
        <ToastContainer />
        <ConditionalRenderer
          condition={!!cartData.cartItems.length}
          whenConditionIsFalse={
            <p className='inline-flex items-center justify-center text-2xl text-slate-700 dark:text-slate-300 h-[27vh] w-full font-patrick font-bold'>
              Cart Is empty :)
            </p>
          }
          whenConditionIsTrue={
            <CartContent
              cartData={cartData}
              loading={loading}
              onClick={orderCartHandler}
            />
          }
        />
      </main>
    </>
  );
};

export default Cart;

// can not use the getStaticProps redirect for now!
