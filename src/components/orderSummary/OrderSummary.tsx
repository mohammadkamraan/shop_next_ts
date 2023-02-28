import { FC, memo } from "react";

interface OrderSummaryProps {
  quantity: number;
  totalPrice: number;
  style?: string;
}

interface TotalDataProps {
  header: string;
  total: number;
  style?: string;
}

const TotalData: FC<TotalDataProps> = ({ header, total, style }) => {
  return (
    <div className={"flex items-center justify-between " + style}>
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
        "dark:border-4 dark:rounded-md dark:border-slate-300 shadow-md " + style
      }
    >
      <h1 className='font-bold text-lg'>Order Summary</h1>
      <TotalData header='Total Quantity' total={quantity} style='my-3' />
      <TotalData header='Total Price' total={totalPrice} style='mb-3' />
      <button className='mx-auto mt-10 w-64 block py-2 px-8 bg-rose-700 text-center rounded-lg text-white text-xl ring-1 ring-rose-700 transition-all duration-500 hover:scale-105'>
        Order
      </button>
    </div>
  );
};

export default memo(OrderSummary);
