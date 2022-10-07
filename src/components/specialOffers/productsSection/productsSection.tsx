import { FC, useContext } from "react";

import AllProductsContext from "../../../context/AllProductsContext";
import Carousel, { CarouselItem } from "../../carousel/Carousel";
import ListCreator from "../../listCreator/ListCreator";

interface singleProductComponentProps {
  product: { [key: string]: any };
}

const singleProduct: FC<singleProductComponentProps> = ({ product }) => {
  return (
    <CarouselItem items={5}>
      <div className='relative w-50 md:w-[95%] h-72 rounded-md bg-sky-200 my-auto overflow-hidden'>
        <div className='h-48 w-full text-center p-2'>
          <img className='h-full w-full bg-none bg-sky-200 block' src={product.image} alt={product.title} />
        </div>
        <div>
          <p className='text-center text-slate-800 text-lg'>
            {product.title.length > 25 ? `${product.title.slice(0, 25)} ...` : product.title}
          </p>
          <p className='text-lg text-red-700 line-through ml-5'>$ {product.price}</p>
          <p className='text-2xl text-slate-800 font-bold ml-5'>
            $ {(product.price - (product.price / 100) * 20).toFixed(2)}{" "}
            <span className='text-sm text-teal-600'>(-20%)</span>
          </p>
        </div>
      </div>
    </CarouselItem>
  );
};

const ProductsSection: FC = () => {
  const contextData = useContext(AllProductsContext);
  return (
    <Carousel withDots={false} items={5}>
      {/* <ListCreator key={2} items={contextData?.allProducts} itemPropsName='product' itemComponent={singleProduct} /> */}
      {/* <ListCreator items={contextData?.allProducts} itemPropsName='product' itemComponent={singleProduct} /> */}
      {contextData?.allProducts.map((product: any) => (
        <CarouselItem key={product.id} items={5}>
          <div className='relative w-50 md:w-[95%] h-72 rounded-md bg-sky-200 my-auto overflow-hidden'>
            <div className='h-48 w-full text-center p-2'>
              <img className='h-full w-full bg-none bg-sky-200 block' src={product.image} alt={product.title} />
            </div>
            <div>
              <p className='text-center text-slate-800 text-lg'>
                {product.title.length > 25 ? `${product.title.slice(0, 25)} ...` : product.title}
              </p>
              <p className='text-lg text-red-700 line-through ml-5'>$ {product.price}</p>
              <p className='text-2xl text-slate-800 font-bold ml-5'>
                $ {(product.price - (product.price / 100) * 20).toFixed(2)}{" "}
                <span className='text-sm text-teal-600'>(-20%)</span>
              </p>
            </div>
          </div>
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default ProductsSection;
