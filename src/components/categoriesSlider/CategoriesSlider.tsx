import { FC, memo, ReactNode } from "react";
import Slider from "react-slick";
import { homePage } from "../../data/slidersData/slidersData";

interface CategoriesSliderProps {
  children: ReactNode;
}

const CategoriesSlider: FC<CategoriesSliderProps> = props => {
  return (
    <section role='slider'>
      <Slider
        {...homePage}
        className='flex w-11/12 mx-auto bg-gray-100 dark:bg-slate-900 pt-2 md:pt-10 font-patrick h-[30vh] md:h-[70vh] relative'
      >
        {props.children}
      </Slider>
    </section>
  );
};

export default memo(CategoriesSlider);
