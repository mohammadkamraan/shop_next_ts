import Link from "next/link";
import { FC } from "react";

import GlassTimeDown from "../../timeDown/glassTimeDown/GlassTimeDown";

export interface Item {
  backGroudnImage: string;
  title: string;
  description: string;
  days: number;
  id: number;
}

interface SpecialSaleCardComponentProps {
  item: Item;
}

const SpecialSaleCard: FC<SpecialSaleCardComponentProps> = ({ item }) => {
  const { backGroudnImage, description, title, days } = item;

  return (
    <article
      role='card'
      className={`${backGroudnImage} bg-contain md:bg-cover bg-center bg-no-repeat rounded-md shadow-md col-span-12 lg:col-span-6 h-auto`}
    >
      <div className='flex flex-col justify-between h-4/6'>
        <header className='pl-8 pt-12 w-7/12 mb-4'>
          <h6 className='text-slate-700 text-4xl mb-5'>{title}</h6>
          <p className='text-2xl text-slate-600'>{description}</p>
        </header>
        <Link href='/'>
          <a className='my-5 ml-32 w-28 py-3 px-1 bg-rose-700 text-center rounded-lg text-white text-sm ring-1 ring-rose-700 transition-all duration-500 hover:scale-105'>
            See Product
          </a>
        </Link>
        <div className='w-2/3 mx-auto mb-4'>
          <GlassTimeDown days={days} />
        </div>
      </div>
    </article>
  );
};

export default SpecialSaleCard;
