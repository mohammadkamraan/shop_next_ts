import { FC, memo, ReactNode } from "react";

interface CardComponentProps {
  children: ReactNode;
  shadowSize?: "small" | "medium" | "large";
  radiusSize?: "small" | "medium" | "large";
  styles?: string;
  preventDefailt?: boolean;
}

enum shadows {
  small = "shadow-sm",
  medium = "shadow-md",
  large = "shadow-lg",
}

enum radiuses {
  small = "rounded-sm",
  medium = "rounded-md",
  large = "rounded-lg",
}

const Card: FC<CardComponentProps> = ({
  styles,
  children,
  shadowSize = "medium",
  radiusSize = "medium",
  preventDefailt = true,
}) => {
  return (
    <div
      onClick={event => {
        if (preventDefailt) {
          event.preventDefault();
          event.stopPropagation();
        }
      }}
      className={`${shadows[shadowSize]} ${radiuses[radiusSize]} shadow-slate-700 bg-white dark:bg-slate-800 `.concat(
        styles as string
      )}
    >
      {children}
    </div>
  );
};

export default memo(Card);
