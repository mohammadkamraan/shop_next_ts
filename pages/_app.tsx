import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { useRouter } from "next/router";

import store from "../redux/store";
import Navbar from "../src/components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const withoutNavbarPathes: string[] = ["/login", "/singup"];

  return (
    <Provider store={store}>
      {withoutNavbarPathes.indexOf(pathname) < 0 && <Navbar />}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
