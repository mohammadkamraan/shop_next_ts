import { ChangeEvent, FC, FormEvent, useState } from "react";

const EmailRegisterer: FC = () => {
  const [email, setEmail] = useState("");

  const onChangeHandler = (event: ChangeEvent<HTMLFormElement>) => setEmail(event.target.value);

  const sumbitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(email);
  };

  return (
    <form
      className='flex items-center w-full rounded-md overflow-hidden h-12 font-patrick'
      onChange={onChangeHandler}
      onSubmit={sumbitHandler}
    >
      <input className='h-full w-full placeholder:pl-5 pl-5 text-slate-700' placeholder='please enter your email' />
      <button className='bg-rose-700 rounded-r-md h-12 text-white px-8'>Register</button>
    </form>
  );
};

export default EmailRegisterer;
