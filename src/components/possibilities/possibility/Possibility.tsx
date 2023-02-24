import Image from "next/image";

import { PossibilityItem } from "../../../data/possibilitiesData/possibilitiesData";

interface componentProps {
  possibilityData: PossibilityItem;
}

const Possibility = ({ possibilityData }: componentProps) => {
  return (
    <figure
      role='Service'
      className='col-span-6 md:col-span-3 flex flex-col items-center'
    >
      <Image
        src={possibilityData.imageUrl}
        alt={possibilityData.imageAlt}
        width={50}
        height={50}
      />
      <figcaption className='text-slate-600 dark:text-slate-300 py-2 text-sm md:text-base text-center'>
        {possibilityData.possibility}
      </figcaption>
    </figure>
  );
};

export default Possibility;
