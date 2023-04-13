import { memo } from "react";

interface componentProps {
  items: any;
  itemPropsName: string;
  itemComponent: any;
  extraProps?: any;
  keyInItem?: string;
}

const ListCreator = ({
  items,
  itemPropsName,
  itemComponent: ItemComponent,
  extraProps,
  keyInItem,
}: componentProps) => {
  return (
    <>
      {items.map((item: any, index: number) => (
        <ItemComponent
          {...extraProps}
          key={keyInItem ? item[keyInItem] : index}
          {...{ [itemPropsName]: item, index }}
        />
      ))}
    </>
  );
};

export default memo(ListCreator);
