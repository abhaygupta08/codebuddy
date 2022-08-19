import React, { Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/solid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function SelectList({
  selectedValue,
  setSelectedValue,
  listData,
  hideBorder,
  placeholder,
  minWidth,
  id = 0,
}) {
  
  if (listData?.length > 0 && listData[0] !== null) {
    return (
      <div className={`top-16 w-full `}>
        <Listbox
          value={selectedValue}
          onChange={(value) => setSelectedValue(value)}
        >
          <div className={`relative mt-1`}>
            <Listbox.Button
              // className={`relative w-full pr-10 text-left bg-white ${border()}
              className={`
              hover:border-purple-400 hover:bg-purple-50
              text-left rounded appearance-none bg-white relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:ring-purple-500 focus:border-purple-500 focus:z-10
              border-gray-350 cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75
              focus-visible:ring-white focus-visible:ring-offset-gray-300 focus-visible:ring-offset-2 focus-visible:border-gray-500
              sm:text-sm`}
              style={{ minWidth: minWidth || '120px' }}
            >
              <span className={`block truncate text-md text-gray-600`}>
                {!selectedValue ? placeholder : selectedValue}
              </span>
              <span
                className='absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none'
              >
                <FontAwesomeIcon icon={faAngleDown} className='text-gray-450' />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave='transition ease-in duration-100'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <Listbox.Options
                style={{ minWidth: '130px' }}
                className='absolute z-10 w-full py-1 mt-1 overflow-auto text-sm text-center bg-white rounded shadow-lg max-h-60 ring-1 ring-gray-350 ring-opacity-5 focus:outline-none sm:text-sm'
              >
                {listData?.map((item, idx) => (
                  <Listbox.Option
                    key={idx}
                    className={({ active }) =>
                      `${
                        active
                          ? 'text-gray-900 bg-purple-50 w-full text-center	'
                          : 'text-gray-900 w-full text-center	'
                      } cursor-pointer select-none relative py-2 px-4 w-full text-center	`
                    }
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? 'font-medium' : 'font-normal'
                          } block truncate text-left	`}
                        >
                          {item}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? 'text-gray-600' : 'text-gray-600'
                            } absolute inset-y-0 right-2 flex items-center pl-3`}
                          >
                            <CheckIcon className='w-5 h-5' aria-hidden='true' />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    );
  } else return <></>;
}
