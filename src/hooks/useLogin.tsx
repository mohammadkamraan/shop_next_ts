import { signIn } from "next-auth/react";
import { useState } from "react";

interface LoginOptions {
  username: string;
  password: string;
  endPoint: string;
}

export const useLogin = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const login = async (options: LoginOptions) => {
    setErrorMessage("");
    setLoading(true);
    const loginData = await signIn("credentials", {
      ...options,
      redirect: false,
    });
    setErrorMessage(loginData?.error ? loginData.error : "");
    setLoading(false);
  };
  return [loading, errorMessage, login] as const;
};
