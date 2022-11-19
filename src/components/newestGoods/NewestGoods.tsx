import { FC } from "react";
import GridSystem from "../gridSystem/GridSystem";
import NewGoodCard, { NewGoodCardData } from "./newGoodCard/NewGoodCard";

interface NewestGoodsComponentProps {
  goods: NewGoodCardData[];
}

const NewestGoods: FC<NewestGoodsComponentProps> = ({ goods }) => {
  return (
    <section className='font-patrick px-8 sm:px-24'>
      <header className='py-12 text-slate-800 text-4xl text-center'>
        <h6>Newest Goods</h6>
      </header>
      <GridSystem items={goods} gap='gap-5' needRows={false} itemComponent={NewGoodCard} />
    </section>
  );
};

export default NewestGoods;
