import { FC } from "react";

interface CartOverviewItemProps {
  imageUrl: string;
  description: string;
  count: number;
  price: number;
  priceDiscount: number;
}

const CartOverviewItem: FC<CartOverviewItemProps> = ({
  imageUrl,
  description,
  count,
  price,
  priceDiscount,
}) => {
  return (
    <div>
      <div className='flex items-center justify-around w-full'>
        <img src={imageUrl} className='w-20 h-32' />
        <p className='text-slate-700 dark:text-slate-300'>{description}</p>
      </div>
    </div>
  );
};

export default CartOverviewItem;
