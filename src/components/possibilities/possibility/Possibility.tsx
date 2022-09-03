import Image from "next/image";
import { possibilityItem } from "../Possibilities";

interface componentProps {
  possibilityData: possibilityItem;
}

const Possibility = ({ possibilityData }: componentProps) => {
  return (
    <div className='col-span-6 md:col-span-3 flex flex-col items-center'>
      <Image src={possibilityData.imageUrl} alt={possibilityData.imageAlt} width={50} height={50} />
      <p className='text-slate-600 dark:text-slate-300 py-2 text-sm md:text-base text-center'>
        {possibilityData.possibility}
      </p>
    </div>
  );
};

export default Possibility;
