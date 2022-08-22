import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router';
import LeftArrow from '../../assets/leftArrow.svg';

export default function Unathorized() {
  const navigate = useNavigate();
  return (
    <>
            <Helmet>
      <title>Unauthorized</title>
      </Helmet>

      <button 
          onClick={() => {
            navigate(-1);
          } }
          
          className='flex items-center text-xs mx-14 my-14'>
            <img src={LeftArrow} className="mt-px" width="16px" alt='left arrow' />
            <span className=''>Go Back</span>
            </button>
            <br/>
            <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
    <div className="w-full max-w-md space-y-8 text-center">
        <h1>You are not authorized to access this page</h1>
  

</div>
</div>
    </>
  );
}
