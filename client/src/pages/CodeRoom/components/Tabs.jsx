import React, { useState, useRef } from 'react';

export default function Tabs({ tabList, color, border }) {
  const scrollRef = useRef(null);
  const [selected, setSelected] = useState(0);

  const setTabs = (idx) => {
    setSelected(idx);
    tabList[idx]?.callback && tabList[idx].callback();
  };

  return (
    <div className='w-full'>
      <div className='flex justify-between w-full px-12 overflow-x-scroll text-sm text-center bg-white border shadow cursor-pointer gap-7 no-scrollbar xl:overflow-x-hidden lg:mt-0 lg:mx-0 font-roboto xs:border-b-1 md:rounded-t-lg md:border-1'>
        <div
          className='flex overflow-x-scroll w-max no-scrollbar'
          ref={scrollRef}
        >
          {tabList.map((el, idx) => {
            return (
              <div
                key={idx}
                data-cy='tabs'
                className={`min-w-max py-5 px-4 mx-4 select-none
                ${
                  selected === idx
                    ? `${color} ${border} text-primary-400 border-b-2 border-primary-400 font-bold cursor-pointer `
                    : el.disabled
                    ? 'text-primary-500 border-gray-450 disabled opacity-50'
                    : 'text-primary-500 border-gray-450 cursor-pointer'
                }
              `}
                onClick={() => (el.disabled ? null : setTabs(idx))}
              >
                {el.name}
              </div>
            );
          })}
        </div>
      </div>

      <div className='w-full px-8 py-4 border-b border-l border-r rounded-b-lg shadow'>{tabList[selected].component}</div>
    </div>
  );
}
