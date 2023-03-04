import { NextPage } from "next";
import Head from "next/head";

import useFavoritesStore, {
  FavoritesStore,
} from "../../src/store/userFavoritesStore";

const Favorites: NextPage = () => {
  const { favoritesData, removeProductFromFavorites } = useFavoritesStore(
    (state: FavoritesStore) => state
  );

  return (
    <>
      <Head>
        <title>M Shop | Favorites</title>
        <meta
          name='description'
          content='M Shop Users Favorites Page. in this page the user can see and manage the products which are his or shes Favorites'
        />
        <meta
          name='keywords'
          content='M Shop favorites Page,Favorites,Users Favorites,Favorites Page,m shop favorites page,favorites,users favorites,favorites page'
        />
      </Head>
    </>
  );
};

export default Favorites;
