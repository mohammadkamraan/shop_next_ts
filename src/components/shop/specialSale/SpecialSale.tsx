import { FC, memo } from "react";
import ListCreator from "../../listCreator/ListCreator";
import GridSystem from "../../UI/gridSystem/GridSystem";
import SpecialSaleCard from "./SpecialSaleCard/SpecialSaleCard";

import { Item } from "./SpecialSaleCard/SpecialSaleCard";

interface SpecialSaleComponentProps {
  sales: ReadonlyArray<Item>;
}

const SpecialSale: FC<SpecialSaleComponentProps> = ({ sales }) => {
  return (
    <section className='font-patrick pt-8 px-8 sm:px-24'>
      <header className='text-slate-700 dark:text-slate-300 pb-10'>
        <h1 className='text-center text-4xl'>Special Sale</h1>
      </header>
      <GridSystem needRows={false} gap='gap-4'>
        <ListCreator
          itemComponent={SpecialSaleCard}
          items={sales}
          itemPropsName='item'
        />
      </GridSystem>
    </section>
  );
};

export default memo(SpecialSale);
