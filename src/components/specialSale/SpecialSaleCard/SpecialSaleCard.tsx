import Link from "next/link";
import { FC } from "react";

export interface Item {
  backGroudnImage: string;
  title: string;
  description: string;
  id: number;
}

interface SpecialSaleCardComponentProps {
  item: Item;
}

const SpecialSaleCard: FC<SpecialSaleCardComponentProps> = ({ item }) => {
  const { backGroudnImage, description, title } = item;
  return (
    <article
      role='card'
      className={`${backGroudnImage} bg-contain md:bg-cover bg-center bg-no-repeat rounded-md shadow-md col-span-6 h-96`}
    >
      <div>
        <header>
          <h6>{title}</h6>
          <p>{description}</p>
        </header>
        <Link href='/'>
          <a></a>
        </Link>
      </div>
      <div></div>
    </article>
  );
};

export default SpecialSaleCard;
