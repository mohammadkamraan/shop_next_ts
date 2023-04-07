import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Navbar from "../src/components/layout/navbar/Navbar";

import { ThemeProvider } from "next-themes";

import { SessionProvider } from "next-auth/react";

import Footer from "../src/components/layout/footer/Footer";

import NextNProgress from "nextjs-progressbar";
// react-slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const withoutNavbarPathes: string[] = ["/login", "/singup"];

  return (
    <ThemeProvider attribute='class'>
      <SessionProvider session={pageProps.pageProps}>
        <div className='bg-gray-100 dark:bg-slate-900'>
          {!withoutNavbarPathes.includes(pathname) && <Navbar />}
          <NextNProgress />
          <Component {...pageProps} />
          {!withoutNavbarPathes.includes(pathname) && <Footer />}
        </div>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
