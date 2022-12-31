import { FC } from "react";
import Slider from "react-slick";
import ListCreator from "../listCreator/ListCreator";
import PopularBrand from "./popularBrand/PopularBrand";

export interface Brand {
  id: number;
  imageSrc: any;
  name: string;
}

interface PopularBrandsProps {
  brands: ReadonlyArray<Brand>;
}

const PopularBrands: FC<PopularBrandsProps> = ({ brands }) => {
  const settings = {
    infinite: true,
    speed: 6000,
    slidesToShow: 8,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    swipeToSlide: false,
    nextArrow: <></>,
    prevArrow: <></>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <section className='font-patrick'>
      <header className='text-center py-10 text-slate-800'>
        <h6 className='text-4xl dark:text-slate-300'>Popular Brands</h6>
      </header>
      <div className='px-8 w-full'>
        <Slider {...settings} className='slick-has-margin'>
          {brands.map(brand => (
            <PopularBrand key={brand.id} brand={brand} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default PopularBrands;
