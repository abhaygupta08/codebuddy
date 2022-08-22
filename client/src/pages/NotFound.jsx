import React from 'react';
import { Helmet } from 'react-helmet';
import NotFoundimg from '../assets/NotFound.svg';
import ParticipateBtn from './ContestWatcher/components/ParticipateBtn';
export default function NotFound() {
  return (<>
          <Helmet>
      <title>Page not found </title>
      </Helmet>

    <div className='flex items-center justify-center min-h-full px-4 py-8 sm:px-6 lg:px-8'>
      <div className='w-full max-w-xl text-center'>
        <img src={NotFoundimg} alt='Not Found' />
        <h2 className='text-3xl -mt-14 whitespace-nowrap'>
          The page you're looking for does not exists.
        </h2>
        <p className='text-sm opacity-60'>
          You may have mistyped the address or the page may have moved.
        </p>
        <div className='flex justify-center mt-4'>
          <ParticipateBtn link={'/'} text='Go to Home' />
        </div>
      </div>
    </div>
  </>
  );
}
