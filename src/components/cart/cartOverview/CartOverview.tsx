import Link from "next/link";
import { FC } from "react";
import useCartStore from "../../../store/useCartStore";
import ListCreator from "../../listCreator/ListCreator";
import Card from "../../UI/Card/Card";
import CartOverviewItem from "./cartOverviewItem/CartOverviewItem";

const CartOverview: FC = () => {
  const { cartData } = useCartStore();

  return (
    <Card styles='hidden md:block w-80 h-96 absolute top-10 -left-72 cursor-auto overflow-y-auto'>
      <header className='w-full flex justify-between px-4 mt-2'>
        <h6 className='text-slate-700 dark:text-slate-300 text-lg'>
          {cartData.totalAmount} Product
        </h6>
        <Link href='/cart'>
          <a className='text-sky-600 dark:text-sky-500 text-lg'>See Cart</a>
        </Link>
      </header>
      <hr className='bg-slate-600 dark:bg-slate-200 w-full px-3 my-2' />
      <ListCreator
        itemComponent={CartOverviewItem}
        itemPropsName='cartItem'
        items={[...cartData.cartItems]}
      />
    </Card>
  );
};

export default CartOverview;
