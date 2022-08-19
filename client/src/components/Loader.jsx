import React from 'react';

export default function Loader({ width = '14', height = '14', color = 'black', small = false }) {
  return (
<div
      className={
        `${small ? '' : 'w-full h-full'} flex justify-center items-center ` 
      }
    >
      <div
        className={`animate-spin rounded-full h-${height} w-${width} border-b-2 border-${color}`}
      ></div>
      {/* {text ? <div className="mt-2 font-bold text-center">{text}</div> : null} */}
    </div>  );
}