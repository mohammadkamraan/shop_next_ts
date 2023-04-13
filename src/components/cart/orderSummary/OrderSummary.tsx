import { FC, memo } from "react";
import ConditionalRenderer from "../../conditionalRenderer/ConditionalRenderer";
import Button from "../../UI/button/Button";
import DotsLoading from "../../UI/dotsLoading/DotsLoading";

interface OrderSummaryProps {
  quantity: number;
  totalPrice: number;
  onClick: () => void;
  loading?: boolean;
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
  onClick,
  loading,
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
      <Button
        isScaleAble
        onClick={onClick}
        disabled={!!loading}
        styles='mx-auto mt-2 md:mt-10 w-full py-2 px-8 text-center rounded-lg text-xl'
      >
        <ConditionalRenderer
          condition={!!loading}
          whenConditionIsTrue={<DotsLoading color='white' size='small' />}
          whenConditionIsFalse={"Order"}
        />
      </Button>
    </div>
  );
};

export default memo(OrderSummary);
