import { FC } from "react";

interface ErrorParagraphProps {
  errorText: string;
}

const ErrorParagraph: FC<ErrorParagraphProps> = ({ errorText }) => {
  return (
    <p className='text-red-600 text-center border border-red-600 rounded-md my-2 py-2 text-lg font-bold'>{errorText}</p>
  );
};

export default ErrorParagraph;
