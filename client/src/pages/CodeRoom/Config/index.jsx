import React, { useEffect, useState } from 'react';
import Constants from '../Constants';
import SelectList from '../../../components/SelectList';
import maximize from '../../../assets/maximize.svg';
import refreshCcw from '../../../assets/refresh-ccw.svg';
import setting from '../../../assets/settings.svg';
import Modal from '../../../components/Modal';
export default function Config({
  selectedTheme,
  setSelectedTheme,
  selectedLanguage,
  setSelectedLanguage,
  input,
  setInput,
  output,
  setOutput,
  isFullScreen,
  setIsFullScreen,
  setCode,
}) {
  const [selectOptionHidden, setSelectOptionsHidden] = React.useState(true);
  const SelectOptions = [
    {
      heading: 'Select Theme',
      selectedValue: selectedTheme,
      setSelectedValue: setSelectedTheme,
      listData: Constants.monacoThemes,
    },
    {
      heading: 'Select Language',
      selectedValue: selectedLanguage,
      setSelectedValue: setSelectedLanguage,
      listData: Object.keys(Constants.languages),
    },
  ];
  const InputOptions = [
    {
      heading: 'Input',
      selectedValue: input,
      setSelectedValue: setInput,
    },
    {
      heading: 'Output',
      selectedValue: output,
      setSelectedValue: setOutput,
    },
  ];
  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className='relative w-full'>
      <div className='absolute z-10 flex items-center gap-4 right-2 top-2'>
        {selectOptionHidden && (
          <span className='text-white'> {selectedLanguage} </span>
        )}
        <Modal
          heading='Reset the Code'
          description={'Code will be permanently deleted.'}
          btnText={'Reset Code'}
          showModal={showModal}
          setShowModal={setShowModal}
          HandleClick={() => {
            setCode('');
            localStorage.removeItem('codebuddy_code');
            // alert('working as hell ')
          }}
        />

        <div className='flex items-center gap-4 '>
          <img
            title='Reset Code.'
            className='cursor-pointer'
            src={refreshCcw}
            alt='refresh-ccw'
            onClick={() => {
              setShowModal(true);
              // window.open('/ide', '_blank');
              // alert('Are you sure');
            }}
          />

          <img
            title='Preferences'
            className='cursor-pointer'
            src={setting}
            alt='settting'
            onClick={() => {
              setSelectOptionsHidden(!selectOptionHidden);
            }}
          />
          <img
            title='Open IDE in Full Screen.'
            className='cursor-pointer'
            src={maximize}
            alt='maximize'
            onClick={() => {
              setIsFullScreen(!isFullScreen);
            }}
          />
        </div>
      </div>
      <div className='pt-5'>
        <div
          className={
            selectOptionHidden
              ? 'h-0 opacity-0'
              : 'h-auto opacity-100' +
                'transitions-height delay-200 duration-200'
          }
        >
          {SelectOptions.map(
            ({ heading, selectedValue, setSelectedValue, listData }) => (
              <SelectOption
                key={heading}
                heading={heading}
                selectedValue={selectedValue}
                setSelectedValue={setSelectedValue}
                listData={listData}
              />
            )
          )}
        </div>
        {InputOptions.map(({ heading, selectedValue, setSelectedValue }) => (
          <InputOption
            key={heading}
            heading={heading}
            selectedValue={selectedValue}
            setSelectedValue={setSelectedValue}
            selectOptionHidden={selectOptionHidden}
          />
        ))}
      </div>
    </div>
  );
}

const SelectOption = ({
  heading,
  selectedValue,
  setSelectedValue,
  listData,
}) => (
  <div className='pt-4 mx-4'>
    <div className='flex items-center gap-2 my-1'>
      <hr className='text-gray-200' width='20px' />
      <div className='text-gray-200 whitespace-nowrap '>{heading || ''}</div>
      <hr className='text-gray-200' width='100%' />
    </div>

    <SelectList
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      listData={listData}
      placeholder={heading || ''}
    />
  </div>
);

const InputOption = ({
  heading,
  selectedValue,
  setSelectedValue,
  selectOptionHidden,
}) => {
  const [rows, setRows] = useState(heading === 'Input' ? '3' : '5');

  useEffect(() => {
    const useTextAreaRows = (input = false) => {
      // console.log(selectOptionHidden)
      if (selectOptionHidden) {
        if (input) return '6';
        return '12';
      }
      if (input) return '3';
      return '7';
    };
    setRows(useTextAreaRows(heading === 'Input'));
  }, [selectOptionHidden]);

  return (
    <div className='pt-4 mx-4'>
      <div className='flex items-center gap-2 my-1'>
        <hr className='text-gray-200' width='20px' />
        <div className='text-gray-200 whitespace-nowrap '>{heading || ''}</div>
        <hr className='text-gray-200' width='100%' />
      </div>
      <textarea
        rows={rows}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
        readOnly={heading === 'Output'}
        className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none no-scrollbar focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
        placeholder={
          heading === 'Output'
            ? 'Output will be displayed here.'
            : 'Input (if any)'
        }
      />
    </div>
  );
};
