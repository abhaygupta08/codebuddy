import React from 'react';
export default function ParticipateBtn({ link, text }) {
  return (
    <button
      onClick={() => window.open(link, '_blank')}
      className='px-4 py-2 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md w-max participateBtn group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
    >
      <span className='whitespace-nowrap'> {text} </span>
      <div />
    </button>
  );
}
