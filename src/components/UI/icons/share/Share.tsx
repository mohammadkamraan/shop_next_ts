import { FC, useCallback } from "react";
import { toast } from "react-toastify";
import { Domain } from "../../../../constants";
import { categories } from "../../../../data/categoryOfGoodsData/categoryOfGoodsData";

import { Product } from "../../../../typescript/Interfaces";

interface ShareProps {
  product: Product;
}

const Share: FC<ShareProps> = ({ product }) => {
  const onCopyHandler = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(
        `${Domain}/products/${categories[product.category]}/${product.id}`
      );
      toast.success("Link Copied To Clipboard");
    } catch {
      toast.error("someThing Went wrong :(");
    }
  }, [product]);

  return (
    <figure
      onClick={onCopyHandler}
      className='transition-all duration-300 hover:text-rose-600 cursor-pointer'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-5 h-5'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
        />
      </svg>
    </figure>
  );
};

export default Share;
