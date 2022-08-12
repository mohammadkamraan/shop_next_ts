import type { NextPage } from "next";
import { useEffect } from "react";
import store from "../redux/store";
import { fetchUsers } from "../redux/usersSlice";
import MyTest from "../src/components/MyTest";

const Home: NextPage = (props: any) => {
  return <MyTest data={props} />;
};

export async function getStaticProps() {
  store.dispatch(fetchUsers("https://jsonplaceholder.typicode.com/comments"));
  const data = store.getState().data;

  console.log(data);

  return {
    props: { data },
    revalidate: 20,
  };
}

export default Home;
