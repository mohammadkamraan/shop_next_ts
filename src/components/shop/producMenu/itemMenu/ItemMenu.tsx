import Link from "next/link";
import { FC } from "react";
import { items, products } from "../../../../data/sidebarData/Sidebar";
import ListCreator from "../../../listCreator/ListCreator";

interface componentProps {
  item: items;
}

interface LIHtmlTagProps {
  product: products;
}

const LIHtmlTag = ({ product }: LIHtmlTagProps) => {
  return (
    <li className='mb-3 transition-all duration-300 hover:text-rose-500'>
      <Link href={product.link}>
        <a className='font-bold'>{product.product}</a>
      </Link>
    </li>
  );
};

const ItemsMenu: FC<componentProps> = ({ item }) => {
  return (
    <div className='w-full flex flex-col p-10 text-slate-700 dark:text-slate-400'>
      <Link href='/'>
        <a
          role='list-head'
          className='border-l-2 border-rose-500 text-xl mt-3 mb-5 transition-all duration-300 hover:text-rose-500'
        >
          {item.itemName}
        </a>
      </Link>
      <ul>
        <ListCreator
          items={item.products}
          itemPropsName='product'
          itemComponent={LIHtmlTag}
        />
      </ul>
    </div>
  );
};

export default ItemsMenu;
