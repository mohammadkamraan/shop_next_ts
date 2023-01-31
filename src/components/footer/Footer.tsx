import { FC, memo } from "react";
import ListCreator from "../listCreator/ListCreator";

import { footerGuid } from "../../data/footerData/footerData";
import ItemsMenu from "../producMenu/itemMenu/ItemMenu";
import EmailRegisterer from "../emailRegisterer/EmailRegistere";

const Footer: FC = () => {
  return (
    <footer className='w-full'>
      <hr className='my-4 bg-slate-400 h-0.5 w-11/12 mx-auto' />
      <div className='flex flex-col md:flex-row w-11/12 mx-auto items-center'>
        <div className='w-full md:w-8/12 flex flex-col md:flex-row items-start'>
          <ListCreator
            items={footerGuid}
            itemPropsName='item'
            itemComponent={ItemsMenu}
          />
        </div>
        <div className='w-full md:w-4/12'>
          <h5>Be With us</h5>
          <div className='flex items-center w-48 justify-between mx-auto'>
            {/* instagram */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='48'
              height='48'
              viewBox='0 0 64 64'
            >
              <path d='M 31.820312 12 C 13.438312 12 12 13.439312 12 31.820312 L 12 32.179688 C 12 50.560688 13.438313 52 31.820312 52 L 32.179688 52 C 50.561688 52 52 50.560688 52 32.179688 L 52 32 C 52 13.452 50.548 12 32 12 L 31.820312 12 z M 43.994141 18 C 45.099141 17.997 45.997 18.889141 46 19.994141 C 46.003 21.099141 45.110859 21.997 44.005859 22 C 42.900859 22.003 42.003 21.110859 42 20.005859 C 41.997 18.900859 42.889141 18.003 43.994141 18 z M 31.976562 22 C 37.498562 21.987 41.987 26.454563 42 31.976562 C 42.013 37.498562 37.545437 41.987 32.023438 42 C 26.501437 42.013 22.013 37.545437 22 32.023438 C 21.987 26.501437 26.454563 22.013 31.976562 22 z M 31.986328 26 C 28.672328 26.008 25.992 28.701625 26 32.015625 C 26.008 35.328625 28.700672 38.008 32.013672 38 C 35.327672 37.992 38.008 35.299328 38 31.986328 C 37.992 28.672328 35.299328 25.992 31.986328 26 z'></path>
            </svg>
            {/* likedin */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='42'
              height='42'
              viewBox='0 0 64 64'
            >
              <path d='M32,6C17.641,6,6,17.641,6,32c0,14.359,11.641,26,26,26s26-11.641,26-26C58,17.641,46.359,6,32,6z M25,44h-5V26h5V44z M22.485,24h-0.028C20.965,24,20,22.888,20,21.499C20,20.08,20.995,19,22.514,19c1.521,0,2.458,1.08,2.486,2.499 C25,22.887,24.035,24,22.485,24z M44,44h-5v-9c0-3-1.446-4-3-4c-1.445,0-3,1-3,4v9h-5V26h5v3c0.343-0.981,1.984-3,5-3c4,0,6,3,6,8 V44z'></path>
            </svg>
            {/* twiiter */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='40'
              height='40'
              viewBox='0 0 50 50'
            >
              <path d='M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z'></path>
            </svg>
            {/* telegram */}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              width='40'
              height='40'
              viewBox='0 0 50 50'
            >
              <path d='M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z'></path>
            </svg>
          </div>
          <div className='mt-2'>
            <p className='text-slate-600'>
              Stay up to date with the latest discounts by emailing us
            </p>
            <div className='mt-2'>
              <EmailRegisterer />
            </div>
          </div>
        </div>
      </div>
      <hr className='my-4 bg-slate-400 h-0.5 w-11/12 mx-auto' />
      <div>
        <p className='text-center py-2 text-slate-700 text-lg'>
          © 2022 MiShop. All rights reserved - Designed by Zahra Mirzaei and
          Developed by Mohammad Kamran
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
