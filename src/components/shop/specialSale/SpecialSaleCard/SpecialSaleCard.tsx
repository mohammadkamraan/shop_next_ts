import Link from "next/link";
import { FC } from "react";
import Anchor from "../../../UI/anchor/Anchor";

import GlassTimeDown from "../../../UI/timeDown/glassTimeDown/GlassTimeDown";

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
        <header className='pl-8 pt-12 w-7/12 mb-0 md:mb-4'>
          <h6 className='text-slate-700 text-4xl md:text-2xl mb-5'>{title}</h6>
          <p className='text-2xl text-slate-600 hidden md:inline'>
            {description}
          </p>
        </header>
        <Link href='/'>
          <Anchor
            isScaleAble
            styles='my-5 ml-3 md:ml-32 w-12 md:w-28 py-0 md:py-3 px-1 text-center rounded-lg text-sm'
          >
            See Product
          </Anchor>
        </Link>
        <div className='w-2/3 mx-auto mb-4'>
          <GlassTimeDown days={days} />
        </div>
      </div>
    </article>
  );
};

export default SpecialSaleCard;
