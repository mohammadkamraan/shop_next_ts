import Link from "next/link";
import { FC } from "react";
import GridSystem from "../gridSystem/GridSystem";
import NewGoodCard, { NewGoodCardData } from "./newGoodCard/NewGoodCard";

interface NewestGoodsComponentProps {
  goods: NewGoodCardData[];
}

const NewestGoods: FC<NewestGoodsComponentProps> = ({ goods }) => {
  return (
    <section className='font-patrick px-8 sm:px-24 w-full'>
      <header className='py-12 text-slate-800 text-4xl text-center'>
        <h6>Newest Goods</h6>
      </header>
      <GridSystem items={goods} gap='gap-5' needRows={false} itemComponent={NewGoodCard} />
      <Link href='/'>
        <a className='mx-auto my-5 w-64 block py-3 px-8 bg-rose-700 text-center rounded-lg text-white text-xl ring-1 ring-rose-700 transition-all duration-500 hover:scale-105'>
          See All New Products
        </a>
      </Link>
    </section>
  );
};

export default NewestGoods;
