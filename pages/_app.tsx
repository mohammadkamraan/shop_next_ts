import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";

import { ThemeProvider } from "next-themes";

import Navbar from "../src/components/layout/navbar/Navbar";
import Footer from "../src/components/layout/footer/Footer";
import NextNProgress from "nextjs-progressbar";

import useCartStore from "../src/store/useCartStore";
import useFavoritesStore, {
  FavoritesStore,
} from "../src/store/userFavoritesStore";

import useInitialize from "../src/hooks/useInitialize";

import { LocalStorageKeys, WITHOUT_lAYOUT_ROUTES } from "../src/constants";

import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter();

  const setCartItems = useCartStore((state: any) => state.setCartItems);
  const setFavoritesData = useFavoritesStore(
    (state: FavoritesStore) => state.initializeFavoritesData
  );

  useInitialize([
    { handler: setCartItems, keyInStorage: LocalStorageKeys.CART_ITEMS },
    { handler: setFavoritesData, keyInStorage: LocalStorageKeys.FAVORITES },
  ]);

  return (
    <ThemeProvider attribute='class'>
      <SessionProvider session={pageProps}>
        <div className='bg-gray-100 dark:bg-slate-900'>
          {!WITHOUT_lAYOUT_ROUTES.includes(pathname) && <Navbar />}
          <NextNProgress />
          <Component {...pageProps} />
          {!WITHOUT_lAYOUT_ROUTES.includes(pathname) && <Footer />}
        </div>
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
