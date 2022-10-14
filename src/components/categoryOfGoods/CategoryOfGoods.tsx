import { FC } from "react";
import GridSystem from "../gridSystem/GridSystem";
import CategoryOfGoodsItem from "./categoryOfGoodsItem/CategoryOfGoodsItem";

import { categoryOfGoodsData } from "../../data/categoryOfGoodsData/categoryOfGoodsData";

const CategoryOfGoods: FC = () => {
  return (
    <div className='w-full h-4/6 font-patrick'>
      <p className='text-slate-800 text-lg text-center'>Category of Goods</p>
      <div className='h-[30vh]'>
        <GridSystem itemComponent={CategoryOfGoodsItem} items={categoryOfGoodsData} needRows={true} gap={4} />
      </div>
    </div>
  );
};

export default CategoryOfGoods;
