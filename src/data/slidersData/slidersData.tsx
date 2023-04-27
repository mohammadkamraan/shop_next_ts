// slider arrows
import {
  BackArrow,
  NextArrow,
} from "../../components/customSliderArrrows/CustomSliderArrows";

export const homePage = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  swipeToSlide: true,
  nextArrow: <NextArrow />,
  prevArrow: <BackArrow />,
};

export const specialProducts = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  swipeToSlide: true,
  responsive: [
    {
      breakpoint: 1124,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
  nextArrow: <NextArrow />,
  prevArrow: <BackArrow />,
};

export const popularBrands = {
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
