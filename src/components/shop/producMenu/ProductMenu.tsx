import { Dispatch, SetStateAction } from "react";

import { sidebarItemsData, items } from "../../../data/sidebarData/Sidebar";
import ListCreator from "../../listCreator/ListCreator";
import ItemsMenu from "./itemMenu/ItemMenu";
import ProudctMenuItem from "./productMenuItem/ProductMenuItem";

interface componentProps {
  show: boolean;
  showMenu: Dispatch<SetStateAction<boolean>>;
  setProductItem: Dispatch<SetStateAction<ReadonlyArray<items>>>;
  productItems: ReadonlyArray<items>;
}

const ProductMenu = ({
  show,
  showMenu,
  setProductItem,
  productItems,
}: componentProps) => {
  return (
    <section
      onMouseLeave={() => showMenu(false)}
      className={`bg-white dark:bg-slate-900 rounded-t-sm rounded-b-xl w-[97vw] h-[30rem] absolute top-full hidden transition-all duration-500  ${
        show ? "opacity-100 visible" : "opacity-0 invisible"
      } place-self-center z-[4] md:grid md:grid-cols-12 overflow-hidden shadow-lg shadow-neutral-700 dark:shadow-stone-100`}
    >
      <div className='h-full py-5 px-3 col-span-2 flex flex-col border-r-2'>
        <ListCreator
          itemPropsName='item'
          items={sidebarItemsData}
          itemComponent={ProudctMenuItem}
          extraProps={{ setProductItem }}
        />
      </div>
      {/* <Link href=''>
        <a className='inline-flex items-center text-slate-700 pt-5 pl-3 text-xl transition-all duration-300 hover:text-rose-500'>
          <p>See All Product in this Category</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={2}
            stroke='currentColor'
            className='w-3 h-3'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
          </svg>
        </a>
      </Link> */}
      <div className='h-full col-span-10 flex'>
        {productItems.length ? (
          <ListCreator
            items={productItems}
            itemPropsName='item'
            itemComponent={ItemsMenu}
          />
        ) : (
          <p className='text-slate-700 dark:text-slate-400 text-2xl my-auto text-center w-full'>
            There are no products in this category yet! New products will be
            added soon.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductMenu;
