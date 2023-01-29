import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { useLogin } from "../../src/hooks/useLogin";
import DotsLoading from "../../src/components/dotsLoading/DotsLoading";
import RequiredInput from "../../src/components/UI/requiredInpu/RequiredInput";
import ErrorParagraph from "../../src/components/UI/errorParagraph/ErrorParagraph";
import { useSession } from "next-auth/react";

import { useRouter } from "next/router";
import Note from "../../src/components/UI/Note/Note";

interface StatesSetter {
  usernameInput: Dispatch<SetStateAction<string>>;
  passwordInput: Dispatch<SetStateAction<string>>;
}

const Login: NextPage = () => {
  const [loading, errorMessage, login] = useLogin();

  const { data }: any = useSession();

  const [username, setUsername] = useState<string>("");
  const [isUsernameEmpty, setIsUsernameEmpty] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);

  const router = useRouter();

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

  const formSubmitHandler = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (username && password) {
      login({ password, username, endPoint: "auth/login" });
      // s({ body: { password, username }, endPoint: "auth/login", method: "POST" });
    } else {
      setIsPasswordEmpty(true);
      setIsUsernameEmpty(true);
    }
  };

  useEffect(() => {
    if (data) {
      router.replace("/");
    }
  }, [data]);

  return (
    <article className='max-h-screen h-screen flex items-center justify-center font-patrick'>
      <Head>
        <meta
          name='description'
          content='M Shop login page. Users can login to the website in this page.'
        />
        <meta
          name='keywords'
          content='M shop login page,Login,login,singup,Singup'
        />
        <meta name='author' content='Mohammad mahdi Kamran' />
        <title>M Shop / Login</title>
      </Head>
      <section className='w-full md:w-[50%] max-w-[500px] border-2 bg-palette-card shadow-lg dark:shadow-none py-4 px-8 rounded-lg bg-neutral-50 dark:bg-slate-800 dark:bg-opacity-80 mx-2 sm:mx-0'>
        <header>
          <h1 className='text-slate-700 dark:text-slate-300 text-3xl'>
            <b>login</b>
          </h1>
          <h2 className='text-lg text-slate-800 dark:text-slate-400 pt-2'>
            Hi!
          </h2>
          <Note>
            Besides registering, you can also test the template with test
            account information(username: donero - Password: ewedon)
          </Note>
        </header>
        {errorMessage && (
          <ErrorParagraph>{errorMessage} plase try again later</ErrorParagraph>
        )}
        <form onChange={formChangeHandler} onSubmit={formSubmitHandler}>
          {/* userName input */}
          <RequiredInput
            value={username}
            label='UserName'
            inputName='usernameInput'
            inputPlaceHolder='Please Enter Your Username'
            isInvalide={isUsernameEmpty}
            inputType='text'
          />
          {/* password input */}
          <RequiredInput
            value={password}
            label='Password'
            inputName='passwordInput'
            inputPlaceHolder='Please Enter Your Password'
            isInvalide={isPasswordEmpty}
            inputType='password'
          />
          <button
            type='submit'
            className='w-full bg-rose-700 mt-5 py-4 rounded-md text-white text-2xl'
            disabled={loading}
          >
            {loading ? <DotsLoading color='white' size='small' /> : "Login"}
          </button>
        </form>
        <div className='my-5'>
          <Link href='/singup'>
            <a className='text-slate-700 dark:text-slate-400 text-lg'>
              Do not You Have An Account?{" "}
              <span className='text-sky-400'>Sign Up</span>
            </a>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Login;
