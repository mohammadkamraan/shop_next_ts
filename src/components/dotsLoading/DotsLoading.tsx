import { FC } from "react";

interface DotsLoadingProps {
  color: "white" | "rose" | "dark" | "orange" | "pink" | "purple" | "indigo";
  size: "small" | "medium" | "large";
}

const colors = {
  dark: "bg-slate-900",
  indigo: "bg-indigo-500",
  orange: "bg-orange-500",
  pink: "bg-pink-500",
  purple: "bg-purple-500",
  rose: "bg-rose-700",
  white: "bg-white",
};

const sizes = {
  small: "w-3 h-3",
  medium: "w-5 h-5",
  large: "w-8 h-8",
};

const DotsLoading: FC<DotsLoadingProps> = ({ color, size }) => {
  const spansClassName = `rounded-full ${colors[color]} ${sizes[size]}`;
  return (
    <div className='inline-flex items-center justify-between w-1/4'>
      <span className={spansClassName + " animate-scale"} />
      <span className={spansClassName + " animate-scaleTow"} />
      <span className={spansClassName + " animate-scaleThree"} />
    </div>
  );
};

export default DotsLoading;
