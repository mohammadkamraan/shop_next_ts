import { FC, memo } from "react";

interface OrderSummaryProps {
  quantity: number;
  totalPrice: number;
  style?: string;
}

interface TotalDataProps {
  header: string;
  total: number;
}

const TotalData: FC<TotalDataProps> = ({ header, total }) => {
  return (
    <div className='flex items-center justify-between my-3 dark:text-slate-400 text-slate-700'>
      <p>{header}</p>
      <p>{total}</p>
    </div>
  );
};

const OrderSummary: FC<OrderSummaryProps> = ({
  quantity,
  totalPrice,
  style,
}) => {
  return (
    <div
      className={
        "dark:border-4 dark:rounded-md dark:border-slate-300 dark:shadow-none shadow-md " +
        style
      }
    >
      <h1 className='font-bold text-lg dark:text-slate-400 text-slate-700'>
        Order Summary
      </h1>
      <TotalData header='Total Quantity' total={quantity} />
      <TotalData header='Total Price' total={totalPrice} />
      <button className='mx-auto mt-2 md:mt-10 w-full md:w-64 block py-2 px-8 bg-rose-700 text-center rounded-lg text-white text-xl ring-1 ring-rose-700 transition-all duration-500 hover:scale-105'>
        Order
      </button>
    </div>
  );
};

export default memo(OrderSummary);
