import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { useLayoutEffect } from "react";

import useCartStore, { CartStore } from "../../src/hooks/useCartStore";

import UserLocation from "../../src/components/userLocation/UserLocation";
import CartContent from "../../src/components/cartContent/CartContent";
import ConditionalRenderer from "../../src/components/conditionalRenderer/ConditionalRenderer";

const Cart: NextPage = () => {
  const cartData = useCartStore((state: CartStore) => state.cartData);
  const authentication = useSession();

  const router = useRouter();

  useLayoutEffect(() => {
    if (authentication.status === "unauthenticated") {
      router.push("/");
    }
  }, []);

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
      <ConditionalRenderer
        condition={!!cartData.cartItems.length}
        whenConditionIsFalse={
          <p className='inline-flex items-center justify-center text-2xl text-slate-700 dark:text-slate-300 h-[19vh] w-full font-patrick font-bold'>
            Cart Is empty :)
          </p>
        }
        whenConditionIsTrue={<CartContent cartData={cartData} />}
      />
    </main>
  );
};

export default Cart;

// can not use the getStaticProps redirect for now!
