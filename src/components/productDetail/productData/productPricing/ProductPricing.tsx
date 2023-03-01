import { ChangeEvent, FC, useState, memo, useContext } from "react";
import { AddToCartFunctionality } from "../../../../context/AddToCartFunctionality";
import ProductAmountInput from "../../../UI/productAmountInput/ProductAmountInput";

interface ProductPricingProps {
  price: number;
  discount: number;
}

const ProductPricing: FC<ProductPricingProps> = ({ price, discount }) => {
  const [productCount, setProductCount] = useState<number>(1);

  const addToCart = useContext(AddToCartFunctionality);

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) =>
    setProductCount(+event.target.value);

  return (
    <div className='shadow-lg w-4/6 h-72 ml-0 mb-4 md:mb-0 md:ml-5 dark border border-slate-200 mt-5 md:mt-0'>
      <h4 className='mt-6 ml-6 text-xl'>Product Pricing</h4>
      <p className='mt-2 ml-6 line-through text-rose-800'>${price}</p>
      <p className='text-4xl dark:text-slate-200 text-slate-800 font-bold ml-5'>
        ${(price - (price / 100) * discount).toFixed(2)}
        <span className='text-sm text-teal-600'>(-{discount})%</span>
      </p>
      <ProductAmountInput
        isRemoveAble={false}
        incraseHandler={() => setProductCount(preveCount => preveCount + 1)}
        decriseHandler={() => setProductCount(preveCount => preveCount - 1)}
        onChange={changeHandler}
        value={productCount}
        styles='w-44 h-10 mt-8 mb-5 mx-auto'
      />
      <button
        onClick={() =>
          addToCart ? addToCart(productCount) : console.log("test")
        }
        className='mx-auto mt-2 w-44 block py-3 px-4 bg-rose-700 text-center rounded-lg text-white text-xl ring-1 ring-rose-700 transition-all duration-500 hover:scale-105'
      >
        <p className='inline-flex justify-center items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 h-5 mr-1'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
            />
          </svg>
          ADD TO CART
        </p>
      </button>
    </div>
  );
};

export default memo(ProductPricing);
