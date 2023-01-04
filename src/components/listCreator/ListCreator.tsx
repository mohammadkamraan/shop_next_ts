import { memo } from "react";

interface componentProps {
  items: any;
  itemPropsName: string;
  itemComponent: any;
  extraProps?: any;
}

const ListCreator = ({ items, itemPropsName, itemComponent: ItemComponent, extraProps }: componentProps) => {
  return (
    <>
      {items.map((item: any, index: number) => (
        <ItemComponent {...extraProps} key={index} {...{ [itemPropsName]: item }} />
      ))}
    </>
  );
};

export default memo(ListCreator);
