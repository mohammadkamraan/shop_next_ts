import { FC, memo, useCallback, useState } from "react";
import useFavoritesStore from "../../../../store/userFavoritesStore";
import { Product } from "../../../../typescript/AppInterfaces";
import ListCreator from "../../../listCreator/ListCreator";
import Like from "../../../UI/icons/like/Like";
import Share from "../../../UI/icons/share/Share";

interface ProductImagseProps {
  product: Product;
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
    <figure>
      <img
        alt={`the product number ${index} image`}
        src={image}
        className={`${
          size === "large"
            ? " w-11/12 h-96"
            : `w-16 h-16 rounded-md cursor-pointer mt-8 ${
                index === selectedImageIndex
                  ? " shadow-lg shadow-slate-800"
                  : ""
              }`
        } mx-auto md:mx-0`}
        onClick={choseImage ? () => choseImage(index) : () => {}}
      />
    </figure>
  );
};

const ProductImages: FC<ProductImagseProps> = ({ product }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const { addProductToFavorites, removeProductFromFavorites, favoritesData } =
    useFavoritesStore();

  const choseImage = useCallback((imageIndex: number) => {
    setImageIndex(imageIndex);
  }, []);

  return (
    <div className='relative w-6/12 mx-auto md:ml-10 mb-5 md:mb-0'>
      {/* like and share icons */}
      <div className='flex flex-col text-slate-800 dark:text-slate-100 absolute -left-24 md:-left-20'>
        <Like
          ids={favoritesData.favoritesId}
          product={product}
          onAddToFavorites={addProductToFavorites}
          onRemoveOfFavorites={removeProductFromFavorites}
        />
        <Share product={product} />
      </div>
      <ProductImage
        image={product.image[imageIndex]}
        size='large'
        index={imageIndex}
      />
      <ListCreator
        items={product.image}
        itemComponent={ProductImage}
        itemPropsName='image'
        extraProps={{ choseImage, selectedImageIndex: imageIndex }}
      />
    </div>
  );
};

export default memo(ProductImages);
