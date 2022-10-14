import { FC } from "react";
import GridSystem from "../gridSystem/GridSystem";
import LargeCategoryOfGoodItem from "./largeCategoryOfGoodsItem/LargeCategoryOfGoodsItem";

import SmallCategoryOfGoodItem from "./smallCategoryOfGoodItem/SmallCategoryOfGoodItem";

import {
  categoryOfGoodsData,
  categoryOfGoodsDataInSmallMode,
} from "../../data/categoryOfGoodsData/categoryOfGoodsData";
import ListCreator from "../listCreator/ListCreator";

const CategoryOfGoods: FC = () => {
  return (
    <div className='w-full h-4/6 font-patrick'>
      <p className='text-slate-800 text-4xl text-center mt-5'>Category of Goods</p>
      <div className='h-[75vh] p-16 hidden xl:block'>
        <GridSystem items={categoryOfGoodsData} itemComponent={LargeCategoryOfGoodItem} needRows={true} gap={4} />
      </div>
      <div className='flex flex-wrap justify-around items-center xl:hidden pt-6'>
        <ListCreator
          itemComponent={SmallCategoryOfGoodItem}
          itemPropsName='category'
          items={categoryOfGoodsDataInSmallMode}
        />
      </div>
    </div>
  );
};

export default CategoryOfGoods;
