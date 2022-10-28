import { FC, useContext } from "react";
import Slider from "react-slick";

import AllProductsContext from "../../../context/AllProductsContext";
import Carousel, { CarouselItem } from "../../carousel/Carousel";
import ListCreator from "../../listCreator/ListCreator";

// import slider setting
import { specialProducts } from "../../../data/slidersData/slidersData";

const ProductsSection: FC = () => {
  const contextData = useContext(AllProductsContext);
  return (
    <Slider {...specialProducts}>
      {contextData?.allProducts?.slice(0, 10)?.map((product: { [key: string]: any }) => (
        <div
          key={product.id}
          className='relative h-72 rounded-md bg-sky-200 dark:bg-slate-700 dark:bg-opacity-80 my-auto overflow-hidden'
          style={{ width: 200 }}
        >
          <div className='h-48 w-full text-center p-2'>
            <img className='h-full w-full bg-none bg-sky-200 block' src={product.image} alt={product.title} />
          </div>
          <div>
            <p className='text-center text-slate-800 dark:text-slate-300 text-lg'>
              {product.title.length > 25 ? `${product.title.slice(0, 25)} ...` : product.title}
            </p>
            <p className='text-lg text-red-700 dark:text-pink-300 line-through ml-5'>$ {product.price}</p>
            <p className='text-2xl text-slate-800 dark:text-slate-200 font-bold ml-5'>
              $ {(product.price - (product.price / 100) * 20).toFixed(2)}{" "}
              <span className='text-sm text-teal-600'>(-20%)</span>
            </p>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default ProductsSection;
