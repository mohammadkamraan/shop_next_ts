import { FC } from "react";

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
        "dark:border-4 dark:rounded-md dark:border-slate-300 shadow-md w-[100vw] h-72 " +
        style
      }
    >
      <h1>Order Summary</h1>
      <TotalData header='Total Quantity' total={quantity} style='my-3' />
      <TotalData header='Total Price' total={totalPrice} style='mb-3' />
      <button>Order</button>
    </div>
  );
};

export default OrderSummary;
