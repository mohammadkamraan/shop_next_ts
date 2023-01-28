import { FC, memo, useCallback, useState } from "react";
import ListCreator from "../../listCreator/ListCreator";

interface ProductImagseProps {
  images: ReadonlyArray<string>;
}

interface ProductImageProps {
  image: string;
  size: "large" | "small";
  choseImage?: (imageIndex: number) => void;
  index: number;
  selectedImageIndex?: number;
}

const ProductImage: FC<ProductImageProps> = ({
  image,
  size,
  choseImage,
  index,
  selectedImageIndex,
}) => {
  return (
    <img
      src={image}
      className={`${
        size === "large"
          ? " w-52 h-90"
          : `w-16 h-16 rounded-md cursor-pointer mt-8 ${
              index === selectedImageIndex ? " shadow-lg shadow-slate-800" : ""
            }`
      } mx-auto md:mx-0`}
      onClick={choseImage ? () => choseImage(index) : () => {}}
    />
  );
};

const ProductImages: FC<ProductImagseProps> = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const choseImage = useCallback((imageIndex: number) => {
    setImageIndex(imageIndex);
  }, []);

  return (
    <div className='relative ml-36'>
      {/* like and share icons */}
      <div className='flex flex-col text-slate-800 dark:text-slate-100 absolute left-20 md:-left-20'>
        {/* heart svg */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 hover:text-rose-700 my-4 cursor-pointer'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
          />
        </svg>
        {/* share svg */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 hover:text-rose-700 cursor-pointer'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z'
          />
        </svg>
      </div>
      <ProductImage
        image={images[imageIndex]}
        size='large'
        index={imageIndex}
      />
      <ListCreator
        items={images}
        itemComponent={ProductImage}
        itemPropsName='image'
        extraProps={{ choseImage, selectedImageIndex: imageIndex }}
      />
    </div>
  );
};

export default memo(ProductImages);
