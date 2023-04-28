import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { ChangeEvent, useEffect, useReducer } from "react";

import { useLogin } from "../../src/hooks/useLogin";
import DotsLoading from "../../src/components/UI/dotsLoading/DotsLoading";
import RequiredInput from "../../src/components/UI/requiredInpu/RequiredInput";
import ErrorParagraph from "../../src/components/UI/errorParagraph/ErrorParagraph";
import Button from "../../src/components/UI/button/Button";
import Note from "../../src/components/UI/Note/Note";
import ConditionalRenderer from "../../src/components/conditionalRenderer/ConditionalRenderer";

import { EndPoints } from "../../src/constants";
import { formControl } from "../../src/util/formControll";
import { loginForm } from "../../src/data/auth/loginForm";
import AccountMode from "../../src/components/UI/accountMode/AccountMode";

const Login: NextPage = () => {
  const [loading, errorMessage, login] = useLogin();

  const [form, formValidation] = useReducer(formControl, loginForm);

  const { data }: any = useSession();

  const router = useRouter();
  const formChangeHandler = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    formValidation({
      name,
      value,
      isDirty: true,
      isTouched: form[name].isTouched,
    });
  };

  const onBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    formValidation({
      ...form[name],
      isTouched: true,
      name,
    });
  };

  const formSubmitHandler = async (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({
      username: form.usernameInput.value,
      password: form.passwordInput.value,
      endPoint: EndPoints.LOGIN,
    });
  };

  useEffect(() => {
    if (data && Object.keys(data).length) {
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
            inputOnBlur={onBlurHandler}
            value={form.usernameInput.value}
            label='UserName'
            inputName='usernameInput'
            inputPlaceHolder='Please Enter Your Username'
            isInvalid={
              !form.usernameInput.isValid && form.usernameInput.isDirty
            }
            inputType='text'
          />
          {/* password input */}
          <RequiredInput
            inputOnBlur={onBlurHandler}
            value={form.passwordInput.value}
            label='Password'
            inputName='passwordInput'
            inputPlaceHolder='Please Enter Your Password'
            isInvalid={
              !form.passwordInput.isValid && form.passwordInput.isDirty
            }
            inputType='password'
          />
          <Button
            type='submit'
            styles='w-full mt-5 py-4 rounded-md text-2xl'
            disabled={loading || !form.isValid}
          >
            <ConditionalRenderer
              condition={loading}
              whenConditionIsFalse='Login'
              whenConditionIsTrue={<DotsLoading color='rose' size='small' />}
            />
          </Button>
        </form>
        <AccountMode
          to='/signup'
          text="You don't have account? "
          destination=' Signup'
        />
      </section>
    </article>
  );
};

export default Login;
