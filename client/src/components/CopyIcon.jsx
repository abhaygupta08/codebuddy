import React from 'react';

export default function CopyIcon({
  text = '',
  bgColor = '',
  iconColor = 'white',
}) {
  const [isCopyWait, setIsCopyWait] = React.useState(false);

  return (
    <button
      title={'Copy link to Clipboard.'}
      className={`px-2 py-2  ${bgColor} rounded-r`}
    >
      {isCopyWait ? (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke={iconColor}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-check'
        >
          <polyline points='20 6 9 17 4 12' />
        </svg>
      ) : (
        <svg
          onClick={() => {
            navigator.clipboard.writeText(window.location.host+text);
            setIsCopyWait(true);
            setTimeout(() => {
              setIsCopyWait(false);
            }, 3000);
          }}
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          stroke={iconColor}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='feather feather-clipboard'
        >
          <path d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2' />
          <rect x='8' y='2' width='8' height='4' rx='1' ry='1' />
        </svg>
      )}
    </button>
  );
}
