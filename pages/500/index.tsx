import { NextPage } from "next";

const SomethingWentWrong: NextPage = () => {
  return (
    <div className='h-[80vh] flex items-center justify-center font-patrick'>
      <h2 className='text-3xl'>Something went wrong please try again later :(</h2>
    </div>
  );
};

export default SomethingWentWrong;
