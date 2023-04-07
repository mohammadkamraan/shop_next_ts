import { FC, memo } from "react";
import ListCreator from "../../listCreator/ListCreator";
import Possibility from "./possibility/Possibility";

import { PossibilityItem } from "../../../data/possibilitiesData/possibilitiesData";

interface PossibilitiesProps {
  possibilities: ReadonlyArray<PossibilityItem>;
}

const Possibilities: FC<PossibilitiesProps> = ({ possibilities }) => {
  return (
    <section className='grid gap-4 grid-cols-12 my-8 pt-4 xl:max-w-[2100px] mx-auto dark:bg-slate-900'>
      <ListCreator
        items={possibilities}
        itemPropsName='possibilityData'
        itemComponent={Possibility}
      />
    </section>
  );
};

export default memo(Possibilities);
