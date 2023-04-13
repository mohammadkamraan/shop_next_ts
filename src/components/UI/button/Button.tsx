import { FC, memo, useMemo } from "react";

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  styles?: string;
  isScaleAble?: boolean;
}

const Button: FC<ButtonProps> = props => {
  const scaleClassesHandler = useMemo(() => {
    if (props.isScaleAble) {
      return "transition-all duration-500 hover:scale-105";
    }
    return "";
  }, [props.isScaleAble]);

  return (
    <button
      className={`ring-1 ring-rose-700 bg-rose-700 text-white ${scaleClassesHandler} `.concat(
        props.styles as string
      )}
      {...(props as any)}
    >
      {props.children}
    </button>
  );
};

export default memo(Button);
