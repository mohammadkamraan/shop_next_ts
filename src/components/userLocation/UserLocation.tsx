import Link from "next/link";
import { useRouter } from "next/router";

import { FC, useMemo, memo } from "react";
import ListCreator from "../listCreator/ListCreator";

interface UserLocationProps {
  lastParam?: string;
}

interface AppPathObject {
  pathName: string;
  link: string;
}

interface LocationProps {
  appPath: AppPathObject;
}

const Location: FC<LocationProps> = ({ appPath }) => {
  const { link, pathName } = appPath;
  return (
    <Link href={link}>
      <a>{pathName}/</a>
    </Link>
  );
};

const UserLocation: FC<UserLocationProps> = ({ lastParam }) => {
  const router = useRouter();

  //memorized the userPath value to avoid rendering the result for every changes
  const appPathArray: ReadonlyArray<AppPathObject> = useMemo(() => {
    let normalPath: string = "/MShop main page";
    let lastParamLink: string;
    let latestLink: string;
    const arrayOfParams = (normalPath + router.asPath).split("/");
    arrayOfParams.shift();
    lastParamLink = arrayOfParams[arrayOfParams.length - 1];
    if (lastParam?.length) {
      arrayOfParams[arrayOfParams.length - 1] = lastParam;
    }
    return arrayOfParams.map((path, index) => {
      if (path === "MShop main page") {
        latestLink = "/";
      } else if (arrayOfParams.length === index + 1) {
        latestLink += `${lastParamLink}/`;
      } else {
        latestLink += `${path}/`;
      }
      return { pathName: path, link: latestLink };
    });
  }, [router.asPath, lastParam]);

  return (
    <div
      role='path'
      className='p-6 md:pl-16 md:pr-0 font-patrick text-sm md:text-xl font-thin text-slate-500 dark:text-slate-300 w-40 sm:w-full overflow-x-scroll'
    >
      <h4 className='inline-flex'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6 mr-1'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z'
          />
        </svg>
        <ListCreator
          items={appPathArray}
          itemPropsName='appPath'
          itemComponent={Location}
        />
      </h4>
    </div>
  );
};

export default memo(UserLocation);
