import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { ChangeEvent, Dispatch, SetStateAction, useEffect, useState } from "react";

import { useSend } from "../../src/hooks/useSend";
import DotsLoading from "../../src/components/dotsLoading/DotsLoading";

const inputWrapperStyle = "flex flex-col relative mt-5";

const inputStyle = "py-5 px-4 bg-transparent outline-none rounded-md border border-slate-200 shadow-md";

const inputLabelStyle =
  "absolute -top-3 left-3 bg-neutral-50 dark:bg-slate-800 text-lg text-slate-800 dark:text-slate-300 z-2";

const labelsSpan = "text-red-500 pb-2 mr-2";

interface StatesSetter {
  usernameInput: Dispatch<SetStateAction<string>>;
  passwordInput: Dispatch<SetStateAction<string>>;
}

const Login: NextPage = () => {
  const [loading, data, errorData, sender] = useSend();

  const [username, setUsername] = useState<string>("");
  const [isUsernameEmpty, setIsUsernameEmpty] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);

  const stateSetters: StatesSetter = {
    usernameInput: setUsername,
    passwordInput: setPassword,
  };

  const formChangeHandler = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    stateSetters[name as keyof StatesSetter](value);
    setIsPasswordEmpty(false);
    setIsUsernameEmpty(false);
  };

  const formSubmitHandler = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username && password) sender({ body: { password, username }, endPoint: "auth/login", method: "POST" });
    else {
      setIsPasswordEmpty(true);
      setIsUsernameEmpty(true);
    }
  };

  useEffect(() => {
    console.log(data?.token);
  }, [data?.token]);

  return (
    <article className='max-h-screen h-screen flex items-center justify-center font-patrick'>
      <Head>
        <meta name='description' content='M Shop login page. Users can login to the website in this page.' />
        <meta name='keywords' content='M shop login page,Login,login,singup,Singup' />
        <meta name='author' content='Mohammad mahdi Kamran' />
        <title>M Shop / Login</title>
      </Head>
      <section className='w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg dark:shadow-none py-4 px-8 rounded-lg bg-neutral-50 dark:bg-slate-800 dark:bg-opacity-80 mx-2 sm:mx-0'>
        <header>
          <h1 className='text-slate-700 dark:text-slate-300 text-3xl'>
            <b>login</b>
          </h1>
          <h2 className='text-lg text-slate-800 dark:text-slate-400 pt-2'>Hi!</h2>
          <p className='bg-neutral-100 dark:bg-slate-900 py-1 px-2 text-[1rem] text-stone-500 dark:text-stone-300 my-1'>
            Besides registering, you can also test the template with test account information(username: donero -
            Password: ewedon)
          </p>
        </header>
        {errorData && (
          <p className='text-red-600 text-center border border-red-600 rounded-md my-2 py-2 text-lg font-bold'>
            {errorData.statusText
              ? errorData.statusText + "  please try again later"
              : "Some thing went wrong please try again later"}
          </p>
        )}
        <form onChange={formChangeHandler} onSubmit={formSubmitHandler}>
          <div className={inputWrapperStyle}>
            <label className={inputLabelStyle + `${isUsernameEmpty ? " text-red-500 dark:text-red-500" : ""}`}>
              <span className={labelsSpan}>*</span>
              Username
            </label>
            <input
              name='usernameInput'
              placeholder='Please Enter Your Username'
              className={inputStyle + `${isUsernameEmpty ? " border-red-500" : ""}`}
              type='text'
            />
          </div>
          <div className={inputWrapperStyle}>
            <label className={inputLabelStyle + `${isPasswordEmpty ? " text-red-500 dark:text-red-500" : ""}`}>
              <span className={labelsSpan}>*</span>
              Password
            </label>
            <input
              name='passwordInput'
              placeholder='Please Enter Your Password'
              className={inputStyle + `${isPasswordEmpty ? " border-red-500" : ""}`}
              type='password'
            />
          </div>
          <button
            type='submit'
            className='w-full bg-rose-700 mt-5 py-4 rounded-md text-white text-2xl'
            disabled={loading}
          >
            {loading ? <DotsLoading color='white' size='small' /> : "Login"}
          </button>
        </form>
        <div className='my-5'>
          <Link href='/login'>
            <a className='text-slate-700 dark:text-slate-400 text-lg'>
              Do not You Have An Account? <span className='text-sky-400'>Sign Up</span>
            </a>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Login;
