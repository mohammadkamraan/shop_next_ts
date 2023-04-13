import Link from "next/link";
import { FC, memo } from "react";
import { Product } from "../../../typescript/INterfaces";
import ListCreator from "../../listCreator/ListCreator";
import Anchor from "../../UI/anchor/Anchor";
import GridSystem from "../../UI/gridSystem/GridSystem";
import NewGoodCard from "./newGoodCard/NewGoodCard";

interface NewestGoodsComponentProps {
  goods: Product[];
}

const NewestGoods: FC<NewestGoodsComponentProps> = ({ goods }) => {
  return (
    <section className='font-patrick px-8 sm:px-24 w-full'>
      <header className='py-12 text-slate-800 text-4xl text-center'>
        <h6>Newest Goods</h6>
      </header>
      <GridSystem gap='gap-5' needRows={false}>
        <ListCreator
          items={goods}
          itemComponent={NewGoodCard}
          itemPropsName='item'
        />
      </GridSystem>
      <Link href='/'>
        <Anchor
          isScaleAble
          styles='mx-auto my-5 w-64 block py-3 px-8 text-center text-xl rounded-lg'
        >
          See All New Products
        </Anchor>
      </Link>
    </section>
  );
};

export default memo(NewestGoods);
