import Image from "next/image";
import { FC } from "react";

import { Brand } from "../PopularBrands";

interface PopularBrandProps {
  brand: Brand;
}

const PopularBrand: FC<PopularBrandProps> = ({ brand }) => {
  const { id, imageSrc, name } = brand;

  return <Image className='shadow-md' src={imageSrc} alt={name} />;
};

export default PopularBrand;
