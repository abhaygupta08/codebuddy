import React from 'react';
import Loader from '../../../components/Loader';
export default function FormAction({
  handleSubmit,
  type = 'Button',
  text,
  isLoading = false,
}) {
  return (
    <>
      {type === 'Button' ? (
        <button
          className='relative flex justify-center w-full px-4 py-2 mt-10 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
        >
          {isLoading ? <Loader width='5' small={true} height='5' /> : text}
        </button>
      ) : (
        <></>
      )}
    </>
  );
}
