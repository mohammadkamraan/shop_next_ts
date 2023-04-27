import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { ChangeEvent, SyntheticEvent, useEffect, useReducer } from "react";

import { signupForm } from "./singupForm";

import DotsLoading from "../../src/components/UI/dotsLoading/DotsLoading";
import ErrorParagraph from "../../src/components/UI/errorParagraph/ErrorParagraph";
import Note from "../../src/components/UI/Note/Note";
import RequiredInput from "../../src/components/UI/requiredInpu/RequiredInput";

import { useSend } from "../../src/hooks/useSend";

import { formControl } from "../../src/util/formControll";

import { EndPoints } from "../../src/constants";
import Button from "../../src/components/UI/button/Button";
import AccountMode from "../../src/components/UI/accountMode/AccountMode";

const Signup: NextPage = () => {
  const [loading, data, error, sender] = useSend();

  const [form, formValidation] = useReducer(formControl, signupForm);

  const router = useRouter();

  const { status } = useSession();

  const changeHandler = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    formValidation({
      name,
      value,
      isTouched: form[name].isTouched,
      isDirty: true,
    });
  };

  const onBlurHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { name } = event.target;
    formValidation({
      ...form[name],
      name,
      isTouched: true,
    });
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    // checks for if we got an empty input or some empty inputs invalid them
    const signupData = {
      email: form.emailInput.value,
      username: form.username.value,
      password: form.passwordInput.value,
      name: {
        firstname: form.username.value,
        lastname: form.username.value,
      },
      address: {
        city: "kilcoole",
        street: "7835 new road",
        number: 3,
        zipcode: "12926-3874",
        geolocation: {
          lat: "-37.3159",
          long: "81.1496",
        },
      },
      phone: form.phoneNumber.value,
    };
    sender({ data: signupData, method: "POST", url: EndPoints.SINUP });
  };

  useEffect(() => {
    // signup was successfully so redirects to the login page
    if (data?.id) {
      router.replace("/login");
    }
    if (status === "authenticated") router.replace("/");
  }, [data, status]);

  return (
    <article className='max-h-screen h-screen flex items-center justify-center font-patrick'>
      <Head>
        <meta
          name='description'
          content='M Shop Singup page. Users can Singup to the website in this page.'
        />
        <meta name='keywords' content='M shop singup page,Singup,singup' />
        <meta name='author' content='Mohammad mahdi Kamran' />
        <title>M Shop / Singup</title>
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
            The Singup is working but actually in the backend logic its dont
            create a user for every singup (its just for testing)
          </Note>
        </header>
        {form.passwordInput.value !== form.checkPassword.value && (
          <ErrorParagraph>Your Passwords are not equal</ErrorParagraph>
        )}
        {error && (
          <ErrorParagraph>
            {error.message} Please try again later
          </ErrorParagraph>
        )}
        <form onChange={changeHandler} onSubmit={submitHandler}>
          {/* userName input */}
          <RequiredInput
            value={form.emailInput.value}
            label='Email'
            inputName='emailInput'
            inputPlaceHolder='Please Enter Your Email'
            isInvalid={!form.emailInput.isValid && form.emailInput.isTouched}
            inputType='email'
            inputOnBlur={onBlurHandler}
          />
          {/* username Input */}
          <RequiredInput
            value={form.username.value}
            label='username'
            inputName='username'
            inputPlaceHolder='Please Enter Your Username'
            inputType='text'
            isInvalid={form.username.isTouched && !form.username.isValid}
            inputOnBlur={onBlurHandler}
          />
          {/* user phone number input */}
          <RequiredInput
            value={form.phoneNumber.value}
            label='Phone'
            inputName='phoneNumber'
            inputPlaceHolder='Please Enter Your Phone Number'
            inputType='tel'
            isInvalid={form.phoneNumber.isTouched && !form.phoneNumber.isValid}
            inputOnBlur={onBlurHandler}
          />
          {/* password input */}
          <RequiredInput
            value={form.passwordInput.value}
            label='Password'
            inputName='passwordInput'
            inputPlaceHolder='Please Enter Your Password'
            isInvalid={
              (form.passwordInput.value !== form.checkPassword.value ||
                !form.passwordInput.isValid) &&
              form.passwordInput.isTouched
            }
            inputType='password'
            inputOnBlur={onBlurHandler}
          />
          {/* check password input */}
          <RequiredInput
            value={form.checkPassword.value}
            label='check password'
            inputName='checkPassword'
            inputPlaceHolder='Please Enter Your Password Again'
            inputType='password'
            isInvalid={
              (form.passwordInput.value !== form.checkPassword.value ||
                !form.checkPassword.isValid) &&
              form.checkPassword.isTouched
            }
            inputOnBlur={onBlurHandler}
          />
          <Button
            type='submit'
            styles='w-full mt-5 py-4 rounded-md text-2xl'
            disabled={loading || !form.isValid}
          >
            {loading ? <DotsLoading color='white' size='small' /> : "Singup"}
          </Button>
        </form>
        <AccountMode
          to='/login'
          text='You have an account? '
          destination=' Login'
        />
      </section>
    </article>
  );
};

export default Signup;
