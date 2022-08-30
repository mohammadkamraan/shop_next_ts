import ListCreator from "../listCreator/ListCreator";
import Possibility from "./possibility/Possibility";

export interface possibilityItem {
  imageUrl: string;
  imageAlt: string;
  possibility: string;
}

const possibilities: ReadonlyArray<possibilityItem> = [
  { imageUrl: "/images/005-delivery-truck-2.webp", possibility: "express delivery", imageAlt: "delivery" },
  { imageUrl: "/images/003-cash-on-delivery.webp", possibility: "payment on the spot", imageAlt: "money" },
  { imageUrl: "/images/004-headphones.webp", possibility: "24/7 support", imageAlt: "support" },
  { imageUrl: "/images/006-best-seller.webp", possibility: "Guarantee the originality", imageAlt: "guarantee" },
];

const Possibilities = () => {
  return (
    <div className='grid gap-4 grid-cols-12 my-8 pt-4 xl:max-w-[2100px] mx-auto'>
      <ListCreator items={possibilities} itemPropsName='possibilityData' itemComponent={Possibility} />
    </div>
  );
};

export default Possibilities;
