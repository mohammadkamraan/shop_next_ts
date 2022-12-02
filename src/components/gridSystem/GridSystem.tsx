import { FC } from "react";

// components
import ListCreator from "../listCreator/ListCreator";

interface IComponentProps {
  itemComponent: any;
  items: ReadonlyArray<any>;
  gap: string;
  needRows: boolean;
}

type GridWithRows = (hasRows: boolean) => "" | "grid-rows-6";

type GapClassName = (gap: number) => string;

const GridSystem: FC<IComponentProps> = ({ items, gap = "gap-4", needRows = false, itemComponent }) => {
  const gridWithRows: GridWithRows = hasRows => {
    if (hasRows) return "grid-rows-6";
    else return "";
  };

  console.log(items);

  return (
    <div className={`grid grid-cols-12 ${gridWithRows(needRows)} ${gap} w-full h-full`}>
      <ListCreator itemComponent={itemComponent} itemPropsName='item' items={items} />
    </div>
  );
};

export default GridSystem;
