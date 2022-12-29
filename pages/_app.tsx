import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import store from "../redux/store";
import Navbar from "../src/components/./navbar/Navbar";

import { ThemeProvider } from "next-themes";

// react-slick css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "../src/components/footer/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const withoutNavbarPathes: string[] = ["/login", "/singup"];

  return (
    <ThemeProvider attribute='class'>
      <div className='bg-gray-100 dark:bg-slate-900'>
        {!withoutNavbarPathes.includes(pathname) && <Navbar />}
        <Component {...pageProps} />
        {!withoutNavbarPathes.includes(pathname) && <Footer />}
      </div>
    </ThemeProvider>
  );
}

export default MyApp;
