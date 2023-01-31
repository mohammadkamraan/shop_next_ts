import { NextPage } from "next";
import Head from "next/head";

const SomethingWentWrong: NextPage = () => {
  return (
    <>
      <Head>
        <title>MSop | 500 : Something went wrong</title>
        <meta
          name='description'
          content='MShop online shop something went wring page'
        />
        <meta
          name='keywords'
          content='MShop 500, MShop error 500 , Error 500 Page, MShop Error 500 , Mshop Something went wrong, 500 , Error 500 , error 500'
        />
      </Head>
      <div className='h-[80vh] flex items-center justify-center font-patrick'>
        <h2 className='text-3xl'>
          Something went wrong please try again later :(
        </h2>
      </div>
    </>
  );
};

export default SomethingWentWrong;
