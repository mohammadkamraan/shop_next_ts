import { useSession } from "next-auth/react";
import Link from "next/link";
import { FC, useCallback } from "react";
import { useSend } from "../../../hooks/useSend";
import useCartStore from "../../../store/useCartStore";
import ConditionalRenderer from "../../conditionalRenderer/ConditionalRenderer";
import ListCreator from "../../listCreator/ListCreator";
import Button from "../../UI/button/Button";
import Card from "../../UI/Card/Card";
import DotsLoading from "../../UI/dotsLoading/DotsLoading";
import CartOverviewItem from "./cartOverviewItem/CartOverviewItem";

const CartOverview: FC = () => {
  const { cartData } = useCartStore();

  const [loading, response, error, sender] = useSend();

  const { status, data }: any = useSession();

  const orderCartHandler = useCallback(async () => {
    await sender({
      endPoint: "carts",
      body: {
        products: cartData.serverCartData,
        userId: data?.user?.id,
        date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
      },
      method: "POST",
    });
  }, [cartData.serverCartData.length]);

  return (
    <Card styles='hidden md:block w-80 h-96 absolute top-10 z-50 right-5 cursor-auto overflow-y-auto text-slate-700 dark:text-slate-400 font-patrick'>
      <ConditionalRenderer
        condition={!!cartData.totalAmount}
        whenConditionIsFalse={
          <p className='flex items-center justify-center h-full text-xl text-slate-600'>
            Cart is empty
          </p>
        }
        whenConditionIsTrue={
          <>
            <header className='w-full flex justify-between px-4 mt-2'>
              <h6 className='text-slate-700 dark:text-slate-300 text-lg'>
                {cartData.totalAmount} Product
              </h6>
              <Link href='/cart'>
                <a className='text-sky-600 dark:text-sky-500 text-lg'>
                  See Cart
                </a>
              </Link>
            </header>
            <hr className='bg-slate-600 dark:bg-slate-200 w-full px-3 my-2' />
            <ListCreator
              itemComponent={CartOverviewItem}
              itemPropsName='cartItem'
              items={[...cartData.cartItems]}
            />
            <div className='flex justify-evenly items-center w-full sticky bottom-0 bg-white'>
              <div>
                <p className='text-lg'>Payable Amount</p>
                <p className='text-lg'>{cartData.totalPrice}$</p>
              </div>
              <div>
                <Button
                  onClick={orderCartHandler}
                  disabled={loading}
                  styles='w-24 text-center rounded-lg block px-4 py-3'
                >
                  <ConditionalRenderer
                    condition={loading}
                    whenConditionIsFalse={
                      <ConditionalRenderer
                        condition={status === "authenticated"}
                        whenConditionIsFalse='Login and Order'
                        whenConditionIsTrue='Order'
                      />
                    }
                    whenConditionIsTrue={
                      <DotsLoading color='white' size='small' />
                    }
                  />
                </Button>
              </div>
            </div>
          </>
        }
      />
    </Card>
  );
};

export default CartOverview;
