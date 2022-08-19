import React from 'react';
import { Link } from 'react-router-dom';
import codeBuddy from '../../../assets/codeBuddy.svg';
export default function Header({
  heading,
  paragraph,
  linkName,
  linkUrl = '#',
}) {
  return (
    <div className='mb-10'>
      <div className='flex justify-center'>
        <img alt='' className='w-28 h-28' src={codeBuddy} />
      </div>
      <h2 className='mt-6 text-3xl font-extrabold text-center text-gray-900'>
        {heading}
      </h2>
      <p className='mt-2 text-sm text-center text-gray-600 md:mt-5'>
        {paragraph}{' '}
        <Link
          to={linkUrl}
          className='font-medium text-purple-600 hover:text-purple-500'
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}
