import { FC } from "react";
import GridSystem from "../gridSystem/GridSystem";
import SpecialSaleCard from "./SpecialSaleCard/SpecialSaleCard";

import { Item } from "./SpecialSaleCard/SpecialSaleCard";

interface SpecialSaleComponentProps {
  Sales: ReadonlyArray<Item>;
}

const SpecialSale: FC<SpecialSaleComponentProps> = ({ Sales }) => {
  return (
    <section className='font-patrick pt-8 px-8 sm:px-24'>
      <header className='text-slate-700 dark:text-slate-300'>
        <h1 className='text-center text-4xl'>Special Sale</h1>
      </header>
      <GridSystem needRows={false} itemComponent={SpecialSaleCard} items={Sales} gap='gap-4' />
    </section>
  );
};

export default SpecialSale;
