import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  SyntheticEvent,
  useEffect,
  useState,
} from "react";
import DotsLoading from "../../src/components/UI/dotsLoading/DotsLoading";
import ErrorParagraph from "../../src/components/UI/errorParagraph/ErrorParagraph";
import Note from "../../src/components/UI/Note/Note";
import RequiredInput from "../../src/components/UI/requiredInpu/RequiredInput";
import { useSend } from "../../src/hooks/useSend";

import { useRouter } from "next/router";

import {
  isValidEmail,
  phoneValidator,
  arePasswordsEqual,
  validatorsType,
} from "../../src/util/validators";
import { useSession } from "next-auth/react";

interface Validators {
  emailInput: validatorsType;
  phoneNumber: validatorsType;
}

type SetStringToState = Dispatch<SetStateAction<string>>;

type SetBooleanToState = Dispatch<SetStateAction<boolean>>;

interface SetInvalidStates {
  emailInput: SetBooleanToState;
  phoneNumber: SetBooleanToState;
}
interface SetStates {
  emailInput: SetStringToState;
  phoneNumber: SetStringToState;
  username: SetStringToState;
  passwordInput: SetStringToState;
  checkPassword: SetStringToState;
}

interface Input {
  value: string;
  invalidSetter: SetBooleanToState;
}

const validators: Validators = {
  emailInput: isValidEmail,
  phoneNumber: phoneValidator,
};

const Singup: NextPage = () => {
  const [loading, data, error, sender] = useSend();

  const router = useRouter();

  const { status } = useSession();

  const [email, setEmail] = useState<string>("");

  const [inValdEmail, setInvalidEmail] = useState<boolean>(false);

  const [username, setUsername] = useState<string>("");

  const [isUserNameEmpty, setIsUserNameEmpty] = useState<boolean>(false);

  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [invalidPhoneNumber, setInvalidPhoneNumber] = useState<boolean>(false);

  const [password, setPassword] = useState<string>("");

  const [isPasswordEmpty, setIsPasswordEmpty] = useState<boolean>(false);

  const [checkPassword, setCheckPassword] = useState<string>("");

  const [isCheckPasswordEmpty, setIsCheckPasswordEmpty] =
    useState<boolean>(false);

  const [passwordsNotEqual, setPasswordsNotEqual] = useState<boolean>(false);

  const [state, setState] = useState(0);

  const stateSetters: SetStates = {
    emailInput: setEmail,
    username: setUsername,
    phoneNumber: setPhoneNumber,
    checkPassword: setCheckPassword,
    passwordInput: setPassword,
  };

  const invalidStatesSetter: SetInvalidStates = {
    emailInput: setInvalidEmail,
    phoneNumber: setInvalidPhoneNumber,
  };

  const inputs: ReadonlyArray<Input> = [
    { value: email, invalidSetter: setInvalidEmail },
    { value: username, invalidSetter: setIsUserNameEmpty },
    { value: phoneNumber, invalidSetter: setInvalidPhoneNumber },
    { value: password, invalidSetter: setIsPasswordEmpty },
    { value: checkPassword, invalidSetter: setIsCheckPasswordEmpty },
  ];

  const cahngeHandler = (event: ChangeEvent<HTMLFormElement>) => {
    const { name, value } = event.target;
    stateSetters[name as keyof SetStates](value);
    if (invalidStatesSetter[name as keyof SetInvalidStates]) {
      invalidStatesSetter[name as keyof SetInvalidStates](
        !validators[name as keyof Validators](value).isValid
      );
    }
  };

  const submitHandler = (event: SyntheticEvent) => {
    event.preventDefault();
    let input: Input;
    let hasEmptyInput = false;
    // checks for if we got an empty input or some empty inputs invalid them
    for (input of inputs) {
      if (!input.value.trim().length) {
        input.invalidSetter(true);
        hasEmptyInput = true;
      } else {
        input.invalidSetter(false);
      }
    }
    if (!arePasswordsEqual(password, checkPassword)) {
      setPasswordsNotEqual(true);
      return;
    }
    if (!hasEmptyInput) {
      const singupData = {
        email: email,
        username: username,
        password: password,
        name: {
          firstname: username,
          lastname: username,
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
        phone: phoneNumber,
      };
      setPasswordsNotEqual(false);
      sender({ body: singupData, method: "POST", endPoint: "users" });
    }
  };

  useEffect(() => {
    // singup was seccussfull so redirects to the login page
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
        {passwordsNotEqual && (
          <ErrorParagraph>Your Passwords are not equal</ErrorParagraph>
        )}
        {error && (
          <ErrorParagraph>
            {error.message} Please try again later
          </ErrorParagraph>
        )}
        <form onChange={cahngeHandler} onSubmit={submitHandler}>
          {/* userName input */}
          <RequiredInput
            value={email}
            label='Email'
            inputName='emailInput'
            inputPlaceHolder='Please Enter Your Email'
            isInvalide={inValdEmail}
            inputType='email'
          />
          {/* username Input */}
          <RequiredInput
            value={username}
            label='username'
            inputName='username'
            inputPlaceHolder='Please Enter Your Username'
            inputType='text'
            isInvalide={isUserNameEmpty}
          />
          {/* user phone number input */}
          <RequiredInput
            value={phoneNumber}
            label='Phone'
            inputName='phoneNumber'
            inputPlaceHolder='Please Enter Your Phone Number'
            inputType='tel'
            isInvalide={invalidPhoneNumber}
          />
          {/* password input */}
          <RequiredInput
            value={password}
            label='Password'
            inputName='passwordInput'
            inputPlaceHolder='Please Enter Your Password'
            isInvalide={passwordsNotEqual || isPasswordEmpty}
            inputType='password'
          />
          {/* check password input */}
          <RequiredInput
            value={checkPassword}
            label='check password'
            inputName='checkPassword'
            inputPlaceHolder='Please Enter Your Password Again'
            inputType='password'
            isInvalide={passwordsNotEqual || isCheckPasswordEmpty}
          />
          <button
            type='submit'
            className='w-full bg-rose-700 mt-5 py-4 rounded-md text-white text-2xl'
            disabled={loading}
          >
            {loading ? <DotsLoading color='white' size='small' /> : "Singup"}
          </button>
        </form>
        <div className='my-5'>
          <Link href='/singup'>
            <a className='text-slate-700 dark:text-slate-400 text-lg'>
              You have An Account? <span className='text-sky-400'>Login</span>
            </a>
          </Link>
        </div>
      </section>
    </article>
  );
};

export default Singup;
