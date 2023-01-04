import { FC, ReactNode, memo } from "react";

interface IComponentProps {
  gap: string;
  needRows: boolean;
  children: ReactNode;
}

type GridWithRows = (hasRows: boolean) => "" | "grid-rows-6";

const GridSystem: FC<IComponentProps> = ({ gap = "gap-4", needRows = false, children }) => {
  const gridWithRows: GridWithRows = hasRows => {
    if (hasRows) return "grid-rows-6";
    else return "";
  };

  return <div className={`grid grid-cols-12 ${gridWithRows(needRows)} ${gap} w-full h-full`}>{children}</div>;
};

export default memo(GridSystem);
