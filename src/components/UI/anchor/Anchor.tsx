import { forwardRef, memo, useMemo } from "react";

interface AnchorProps extends React.HTMLProps<HTMLAnchorElement> {
  styles?: string;
  isScaleAble?: boolean;
}

const Anchor = forwardRef((props: AnchorProps, ref) => {
  const { styles, isScaleAble, ...anchorTagProps } = props;

  const scaleClassesHandler = useMemo(() => {
    if (props.isScaleAble) {
      return "transition-all duration-500 hover:scale-105";
    }
    return "";
  }, [props.isScaleAble]);

  return (
    <a
      ref={ref}
      {...(anchorTagProps as any)}
      className={`ring-1 ring-rose-700 bg-rose-700 text-white ${scaleClassesHandler} `.concat(
        props.styles as string
      )}
    >
      {props.children}
    </a>
  );
});

export default memo(Anchor);
