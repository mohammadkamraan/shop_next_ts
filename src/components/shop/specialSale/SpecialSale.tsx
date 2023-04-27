import { FC, memo } from "react";

import ListCreator from "../../listCreator/ListCreator";
import GridSystem from "../../UI/gridSystem/GridSystem";
import SectionHeader from "../../UI/sectionHeader/SectionHeader";
import SpecialSaleCard from "./SpecialSaleCard/SpecialSaleCard";

import { Item } from "./SpecialSaleCard/SpecialSaleCard";

interface SpecialSaleComponentProps {
  sales: ReadonlyArray<Item>;
}

const SpecialSale: FC<SpecialSaleComponentProps> = ({ sales }) => {
  return (
    <section className='font-patrick pt-8 px-8 sm:px-24'>
      <SectionHeader>
        <h1>Special Sale</h1>
      </SectionHeader>
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
