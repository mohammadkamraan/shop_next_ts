interface componentProps {
  items: any;
  itemPropsName: string;
  itemComponent: any;
}

const ListCreator = ({ items, itemPropsName, itemComponent: ItemComponent }: componentProps) => {
  return (
    <>
      {items.map((item: any, index: number) => (
        <ItemComponent key={index} {...{ [itemPropsName]: item }} />
      ))}
    </>
  );
};

export default ListCreator;
