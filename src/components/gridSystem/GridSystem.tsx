import { FC } from "react";

// components
import ListCreator from "../listCreator/ListCreator";

// typescript types
import { IGridSystemItem } from "../../typescript/INterfaces";

interface IComponentProps {
  itemComponent: any;
  items: any[];
  gap: number;
  needRows: boolean;
}

type GridWithRows = (hasRows: boolean) => "" | "grid-rows-6";

type GapClassName = (gap: number) => string;

const GridSystem: FC<IComponentProps> = ({ items, gap = 4, needRows = false, itemComponent }) => {
  const gridWithRows: GridWithRows = hasRows => {
    if (hasRows) return "grid-rows-6";
    else return "";
  };

  const gridClassName: GapClassName = gap => {
    return `gap-${gap}`;
  };

  return (
    <div className={`grid grid-cols-12 ${gridWithRows(needRows)} ${gridClassName(gap)}`}>
      <ListCreator itemComponent={itemComponent} itemPropsName='item' items={items} />
    </div>
  );
};

export default GridSystem;
