import React from 'react';
import Loader from '../../../components/Loader';
import Constants from './Constants';
import axios from '../../../api/axios';
import { RUNCODE_URL, GET_ROOM_USERS } from '../../../constants';
import ModalForm from './ModalForm';
import { useParams } from 'react-router';

export default function IdeAction({
  code,
  input,
  selectedLanguage,
  setOutput,
  setIoVisible
}) {
  const params = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
 
  const handleRunCode = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const RunPayload = {
      stdin: input,
      files: [
        {
          name:
            'codebuddy.' +
            (Constants.languages[selectedLanguage] || selectedLanguage),
          content: code,
        },
      ],
    };
    try {
      const response = await axios.post(RUNCODE_URL, RunPayload);
      // console.log(response.data)
      setOutput(
        response.data.stdout || response.data.stderr || response.data.error
      );
      setIoVisible(true);
    } catch (error) {
      setOutput(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='flex items-center justify-end px-12 pb-1.5 pt-2 -my-0.5 bg-dark'>

      <div
      onClick={() => {
        setIoVisible(true);
        
      }
      }
      className= 'mr-auto text-white cursor-pointer'>{selectedLanguage}</div>
      {/* Modal */}
      <ModalForm
        heading={'Save as Snippet'}
        description={
          'After saving snippet you would be able to share them, resuse your code.'
        }
        btnColor={'bg-purple-500'}
        btnText={'Save as Snippet'}
        showModal={showModal}
        setShowModal={setShowModal}
        code={code}
        selectedLanguage={selectedLanguage}
      ></ModalForm>
      {/* Modal */}

      <button
        className='relative flex justify-center px-4 py-2 my-1 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
        onClick={handleRunCode}
      >
        {isLoading ? (
          <>
            <Loader width='5' small={true} height='5' /> &nbsp; &nbsp;Executing
          </>
        ) : (
          'Run Code'
        )}
      </button>
    </div>
  );
}
