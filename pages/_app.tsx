import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Navbar from "../src/components/./navbar/Navbar";

import { ThemeProvider } from "next-themes";

import { SessionProvider } from "next-auth/react";

import CartContext from "../src/context/CartContext";

// react-slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../src/components/footer/Footer";

import NextNProgress from "nextjs-progressbar";
import { useContext, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const withoutNavbarPathes: string[] = ["/login", "/singup"];

  let cart = useContext(CartContext);

  useEffect(() => {
    // const cartItemsInStorage = JSON.parse(
    //   localStorage.getItem("cart") as string
    // );
    // if (cartItemsInStorage) {
    //   cart = [...cartItemsInStorage];
    // }
  }, []);

  return (
    <ThemeProvider attribute='class'>
      <CartContext.Provider value={cart}>
        <SessionProvider session={pageProps.pageProps}>
          <div className='bg-gray-100 dark:bg-slate-900'>
            {!withoutNavbarPathes.includes(pathname) && <Navbar />}
            <NextNProgress />
            <Component {...pageProps} />
            {!withoutNavbarPathes.includes(pathname) && <Footer />}
          </div>
        </SessionProvider>
      </CartContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
