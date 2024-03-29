import { FC } from "react";

interface RequiredInputProps {
  label: string;
  isInvalid: boolean;
  inputType: "email" | "password" | "text" | "tel" | "url";
  inputName: string;
  inputPlaceHolder: string;
  value?: string;
  inputOnChange?: any;
  inputOnBlur?: any;
}

const RequiredInput: FC<RequiredInputProps> = ({
  inputName,
  inputPlaceHolder,
  inputType,
  isInvalid,
  label,
  inputOnChange,
  inputOnBlur,
  value,
}) => {
  return (
    <div className='flex flex-col relative mt-5'>
      <label
        className={`absolute -top-3 left-3 bg-neutral-50 dark:bg-slate-800 text-lg text-slate-800 dark:text-slate-300 z-2 ${
          isInvalid ? "text-red-500 dark:text-red-500" : ""
        }`}
      >
        <span className='text-red-500 pb-2 mr-2'>*</span>
        {label}
      </label>
      <input
        value={value}
        name={inputName}
        placeholder={inputPlaceHolder}
        className={`py-5 px-4 bg-transparent outline-none rounded-md border border-slate-200 shadow-md ${
          isInvalid ? "border-red-500" : ""
        }`}
        onChange={inputOnChange || function () {}}
        onBlur={inputOnBlur || null}
        type={inputType}
      />
    </div>
  );
};

export default RequiredInput;
