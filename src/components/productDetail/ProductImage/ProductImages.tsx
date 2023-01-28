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
}

const ProductImage: FC<ProductImageProps> = ({
  image,
  size,
  choseImage,
  index,
}) => {
  return (
    <img
      src={image}
      className={`${
        size === "large"
          ? " w-72 h-72 md:w-80 md:h-80"
          : "w-20 h-20 rounded-md shadow-md cursor-pointer mt-3"
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

  console.log(imageIndex);

  return (
    <div className='relative'>
      <div className='flex flex-col'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z'
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
        extraProps={{ choseImage }}
      />
    </div>
  );
};

export default memo(ProductImages);
