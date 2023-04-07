import { Item } from "../../components/shop/specialSale/SpecialSaleCard/SpecialSaleCard";

type SpecialSales = ReadonlyArray<Item>;

export const specialSales: SpecialSales = [
  {
    backGroudnImage: 'bg-[url("../public/images/home1.webp")]',
    description:
      "Larissa beautiful sofa with its private design can give a unique beauty to your reception decoration.",
    id: 0,
    title: "Larissa Furniture",
    days: 6,
  },
  {
    backGroudnImage: 'bg-[url("../public/images/home2.webp")]',
    description:
      "Romano sofa has an impressive beauty and can multiply the charm of your home decoration.",
    id: 1,
    title: "Romano furniture",
    days: 8,
  },
];
