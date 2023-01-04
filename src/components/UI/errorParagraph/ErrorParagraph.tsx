import { FC, PropsWithChildren, ReactNode } from "react";

interface ErrorParagraphProps {
  children: ReactNode;
}

const ErrorParagraph: FC<ErrorParagraphProps> = ({ children }) => {
  return (
    <p className='text-red-600 text-center border border-red-600 rounded-md my-2 py-2 text-lg font-bold'>{children}</p>
  );
};

export default ErrorParagraph;
