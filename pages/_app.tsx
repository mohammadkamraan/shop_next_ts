import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import Navbar from "../src/components/./navbar/Navbar";

import { ThemeProvider } from "next-themes";

import { SessionProvider } from "next-auth/react";

// react-slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../src/components/footer/Footer";

import NextNProgress from "nextjs-progressbar";

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
