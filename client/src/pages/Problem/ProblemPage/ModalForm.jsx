import Loader from '../../../components/Loader';
import React, { useEffect } from 'react';
import Input from '../../Account/components/Input';
import CopyIcon from '../../../components/CopyIcon';
import axois from '../../../api/axios';
import { SAVE_SNIPPET_URL } from '../../../constants';
export default function ModalForm({
  heading = '',
  code,
  description = '',
  showModal,
  setShowModal,
  btnText = '',
  btnColor = 'bg-red-500',
  selectedLanguage = '',
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [snippetTitle, setSnippetTitle] = React.useState('');
  const [snippetSaveError, setSnippetSaveError] = React.useState('');
  const [snippetSaveSuccess, setSnippetSaveSuccess] = React.useState('');
  const [setSaveSnippetDisabled, setSetSaveSnippetDisabled] =
    React.useState(false);
  useEffect(() => {
    if (snippetTitle.length > 0) {
      setSnippetSaveError('');
    }
  }, [snippetTitle]);

  const handleSaveSnippet = async () => {
    if (setSaveSnippetDisabled) return;
    if (snippetTitle.length === 0) {
      setSnippetSaveError('Please enter a title');
      return;
    }
    setIsLoading(true);
    const formData = {
      snippetTitle: snippetTitle,
      snippetCode: code,
      snippetType: document.querySelector(
        `input[type='radio'][name='snippetType']:checked`
      ).value,
      snippetLanguage: selectedLanguage,
    };
    setSetSaveSnippetDisabled(true);

    try {
      const response = await axois.post(SAVE_SNIPPET_URL, formData, {
        withCredentials: true,
      });
      setSnippetSaveSuccess(response.data);
    } catch (error) {
      setSnippetSaveError(error.response.data);
    } finally {
      setIsLoading(false);
    }
  };

  if (showModal)
    return (
      <div className='fixed inset-0 z-10 flex items-center justify-center h-screen min-h-full px-4 py-12 bg-gray-900/20 sm:px-6 lg:px-8'>
        <div
          onClick={() => {
            setShowModal(false);
          }}
          className='absolute top-0 left-0 w-screen h-screen bg-black/5'
        ></div>
        <div className='relative max-w-md rounded bg-dark w-max'>
          {' '}
          <div
            onClick={() => {
              setShowModal(false);
            }}
            className='absolute p-1 transition-colors duration-100 bg-purple-600 rounded-full cursor-pointer hover:bg-purple-700 -right-3 -top-3'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='white'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='feather feather-x'
            >
              <line x1='18' y1='6' x2='6' y2='18'></line>
              <line x1='6' y1='6' x2='18' y2='18'></line>
            </svg>
          </div>
          <div className='px-6 py-8 text-left text-white '>
            <div> {heading}</div>
            <hr className='mt-1 mb-8' />
            <div> {description} </div>
            {snippetSaveSuccess ? (
              <div div className='mt-2 mb-4'>
                {' '}
                Your Snippet with title <i>{snippetTitle}</i> has been saved
                successfully.
                <br />
                It can be accessed on below link : <br />
                <br />
                <div className='flex'>
                  <input
                    type={'text'}
                    value={`${window.location.host + snippetSaveSuccess}`}
                    className='relative block w-10/12 px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 appearance-none rounded-l-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
                  />
                  <div className='w-2/12'>
                    <CopyIcon
                      bgColor='bg-purple-600'
                      text={`${snippetSaveSuccess}`}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <Input
                  placeholder={'Snippet Title'}
                  value={snippetTitle}
                  handleChange={setSnippetTitle}
                  labelText={'Snippet Title'}
                  name={'snippetTitle'}
                  labelFor={'snippetTitle'}
                  isRequired
                  readOnly
                />
                {snippetSaveError && (
                  <p className='w-full -mt-4 text-sm text-right text-red-500'>
                    {snippetSaveError}
                  </p>
                )}
                <div className='flex flex-col'>
                  <label>
                    <input
                      type='radio'
                      name='snippetType'
                      defaultChecked
                      value='public'
                    />{' '}
                    Allow to Show on Profile.
                  </label>
                  <label>
                    <input type='radio' name='snippetType' value='private' />{' '}
                    Anyone with the link can only view.
                  </label>
                </div>
              </div>
            )}

            <br />
            <div className='flex items-center gap-4'>
              <button
                onClick={() => {
                  setShowModal(false);
                }}
                className='px-2 py-1 border border-white rounded'
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleSaveSnippet();
                  // setShowModal(false);
                }}
                className={
                  setSaveSnippetDisabled
                    ? 'px-2 py-1 rounded bg-gray-600 border border-gray-600 cursor-not-allowed'
                    : `px-2 py-1 ${btnColor} border border-white rounded`
                }
              >
                {isLoading ? (
                  <div className='flex '>
                    <Loader small={true} width='5' height='5' /> &nbsp;
                    &nbsp;Saving
                  </div>
                ) : (
                  btnText
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  else return null;
}
