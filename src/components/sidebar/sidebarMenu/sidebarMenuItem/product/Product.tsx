import Link from "next/link";
import { products } from "../../../../../data/sidebarData/Sidebar";

interface componentProps {
  product: products;
}

const Product = ({ product }: componentProps) => {
  return (
    <Link href={product.link}>
      <a className='mb-7'>{product.product}</a>
    </Link>
  );
};

export default Product;
