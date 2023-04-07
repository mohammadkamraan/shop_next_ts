import { NextPage } from "next";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import ConditionalRenderer from "../../src/components/conditionalRenderer/ConditionalRenderer";
import FavoriteCard from "../../src/components/UI/favoriteCard/FavoriteCard";
import ListCreator from "../../src/components/listCreator/ListCreator";
import GridSystem from "../../src/components/UI/gridSystem/GridSystem";
import UserLocation from "../../src/components/UI/userLocation/UserLocation";

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
        <meta name='author' content='Mohammad mahdi kamran' />
      </Head>
      <main>
        <ToastContainer />
        <UserLocation />
        <section>
          <ConditionalRenderer
            condition={!!favoritesData.length}
            whenConditionIsTrue={
              <div className='px-12'>
                <GridSystem needRows={false} gap='gap-4'>
                  <ListCreator
                    items={[...favoritesData]}
                    itemComponent={FavoriteCard}
                    itemPropsName='favorite'
                  />
                </GridSystem>
              </div>
            }
            whenConditionIsFalse={
              <p className='font-patrick'>Nothing favorite</p>
            }
          />
        </section>
      </main>
    </>
  );
};

export default Favorites;
