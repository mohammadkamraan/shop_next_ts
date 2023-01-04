import { ChangeEvent, FC, useRef, memo } from "react";

const EmailRegisterer: FC = () => {
  const InputRefrence = useRef<HTMLInputElement>(null);

  const sumbitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(InputRefrence.current!.value);
  };

  return (
    <form className='flex items-center w-full rounded-md overflow-hidden h-12 font-patrick' onSubmit={sumbitHandler}>
      <input
        ref={InputRefrence}
        className='h-full w-full placeholder:pl-5 pl-5 text-slate-700 dark:text-slate-300'
        placeholder='please enter your email'
        type='email'
      />
      <button className='bg-rose-700 rounded-r-md h-12 text-white px-8'>Register</button>
    </form>
  );
};

export default memo(EmailRegisterer);
