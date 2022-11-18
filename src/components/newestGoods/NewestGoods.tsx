import { FC, useContext, useEffect, useState } from "react";
import AllProductsContext from "../../context/AllProductsContext";
import GridSystem from "../gridSystem/GridSystem";
import NewGoodCard, { NewGoodCardData } from "./newGoodCard/NewGoodCard";

type StarsMountHandler = () => number;

const NewestGoods: FC = () => {
  const productsContext = useContext(AllProductsContext);

  const [newestGoods, setNewestGoods] = useState<NewGoodCardData[]>([]);

  const [, setState] = useState<number>(0);

  const starsAmountHandler: StarsMountHandler = () => {
    let starsMount: number = +(Math.random() * 10).toFixed();
    if (starsMount > 5) {
      starsMount -= 5;
    }
    return starsMount;
  };

  const discountPercentHandler: StarsMountHandler = () => {
    let discountPercent: number = +(Math.random() * 100).toFixed();
    if (discountPercent > 70) {
      discountPercent = 0;
    }
    return discountPercent;
  };

  const createNewestGoodsArray = (products: any) => {
    const goodsData = newestGoods;
    let product: any;
    for (product of products) {
      goodsData.push({
        discountPercent: discountPercentHandler(),
        description: product.description,
        goodUrl: `/products/${product.id}`,
        imageSrc: product.image,
        price: product.price,
        stars: starsAmountHandler(),
        title: product.title,
      });
    }
    setNewestGoods(goodsData);
    setState(preveState => ++preveState);
  };

  useEffect(() => {
    createNewestGoodsArray(productsContext!.allProducts.slice(10, 20));
  }, []);

  return (
    <section className='font-patrick px-8 sm:px-24'>
      <header className='py-12 text-slate-800 text-4xl text-center'>
        <h6>Newest Goods</h6>
      </header>
      <GridSystem items={newestGoods} gap='gap-5' needRows={false} itemComponent={NewGoodCard} />
    </section>
  );
};

export default NewestGoods;
