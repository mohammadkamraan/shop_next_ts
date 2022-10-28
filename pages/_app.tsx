import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import { useRouter } from "next/router";

import store from "../redux/store";
import Navbar from "../src/components/./navbar/Navbar";

import { ThemeProvider } from "next-themes";

// react-slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const withoutNavbarPathes: string[] = ["/login", "/singup"];

  return (
    <Provider store={store}>
      <ThemeProvider attribute='class'>
        <div className='bg-gray-100 dark:bg-slate-900'>
          {!withoutNavbarPathes.includes(pathname) && <Navbar />}
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
