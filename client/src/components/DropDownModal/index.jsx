import React from 'react';
import LeftArrow from '@/assets/LeftArrow.svg';

export default function DropdownModal({ label, children, minWidth }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      style={{
        minWidth: minWidth ? minWidth : 'auto',
        height: isOpen ? 'auto' : '70px',
      }}
      className='p-5 border rounded-md shadow-md'
    >
      <div
        onClick={() => setIsOpen(!isOpen)}
        className='cursor-pointer flex justify-between gap-8 select-none'
      >
        <div className='text-primary-500 text-lg'>{label}</div>
        <img
          src={LeftArrow}
          alt='left arrow'
          className={`transform ${isOpen ? 'rotate-90' : '-rotate-90'} `}
        />
      </div>
      <div 
      className={`${isOpen ? 'h-auto block' : 'h-0 hidden'} p-7 `}
        >
          {children}
      </div>
    </div>
  );
}
