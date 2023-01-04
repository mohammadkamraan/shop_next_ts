import { FC } from "react";
import GridSystem from "../UI/gridSystem/GridSystem";
import LargeCategoryOfGoodItem from "./largeCategoryOfGoodsItem/LargeCategoryOfGoodsItem";

import SmallCategoryOfGoodItem from "./smallCategoryOfGoodItem/SmallCategoryOfGoodItem";

import { categoryOfGoodsDataInSmallMode } from "../../data/categoryOfGoodsData/categoryOfGoodsData";
import { largCategoryOfGoodsData } from "../../data/categoryOfGoodsData/largCategoryOfGoodData";
import ListCreator from "../listCreator/ListCreator";

const CategoryOfGoods: FC = () => {
  return (
    <section className='w-full h-4/6 font-patrick'>
      <header>
        <h6 className='text-slate-800 text-4xl text-center my-5 dark:text-slate-300'>Category of Goods</h6>
      </header>
      <div className='h-[75vh] px-16 py-2 hidden xl:block'>
        <GridSystem needRows={true} gap='gap-4'>
          <ListCreator itemComponent={LargeCategoryOfGoodItem} items={largCategoryOfGoodsData} itemPropsName='item' />
        </GridSystem>
      </div>
      <div className='flex flex-wrap justify-around items-center xl:hidden pt-6'>
        <ListCreator
          itemComponent={SmallCategoryOfGoodItem}
          itemPropsName='category'
          items={categoryOfGoodsDataInSmallMode}
        />
      </div>
    </section>
  );
};

export default CategoryOfGoods;
