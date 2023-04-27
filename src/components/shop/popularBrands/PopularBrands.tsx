import { FC, memo } from "react";

import Slider from "react-slick";
import SectionHeader from "../../UI/sectionHeader/SectionHeader";
import PopularBrand from "./popularBrand/PopularBrand";

import { popularBrands } from "../../../data/slidersData/slidersData";

export interface Brand {
  id: number;
  imageSrc: any;
  name: string;
}

interface PopularBrandsProps {
  brands: ReadonlyArray<Brand>;
}

const PopularBrands: FC<PopularBrandsProps> = ({ brands }) => {
  return (
    <section className='font-patrick'>
      <SectionHeader>
        <h6 className='text-4xl dark:text-slate-300'>Popular Brands</h6>
      </SectionHeader>
      <div className='px-8 w-full'>
        <Slider {...popularBrands} className='slick-has-margin'>
          {brands.map(brand => (
            <PopularBrand key={brand.id} brand={brand} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default memo(PopularBrands);
