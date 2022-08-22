import React, { useEffect } from 'react';
import Loader from '../../components/Loader';
import Constants from './Constants';
import axios from '../../api/axios';
import { RUNCODE_URL, GET_ROOM_USERS } from '../../constants';
import { useParams } from 'react-router';

export default function IdeAction({
  code,
  input,
  selectedLanguage,
  setOutput,
  socket,
  isLoading,
  setIsLoading,
}) {
  const params = useParams();
  const [AllUsers, setAllUsers] = React.useState([]);
  useEffect(() => {
    const temp = async () => {
      try {
        const { data } = await axios.post(GET_ROOM_USERS, {
          roomId: params.roomId,
        });
        // console.log(data);
        setAllUsers(data);
      } catch (error) {
        console.log(error);
      }
    };
    temp();
  }, []);

  useEffect(() => {
    socket.on('CurrentRoomUsers', (data) => {
      setAllUsers(data);
    });
  }, [socket]);

  const handleRunCode = async (e) => {
    e.preventDefault();
    if(isLoading) return;
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
    } catch (error) {
      setOutput(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className='flex items-center justify-end px-12 pb-1.5 pt-2 -my-0.5 bg-dark'>
      <div className='mr-auto text-sm text-center text-white'>
        <span>
          {[...new Set(AllUsers?.map((user) => user.username))]?.length}
        </span>
        <span className='opacity-60'>
          {' '}
          {[...new Set(AllUsers?.map((user) => user.username))].join(',')}
        </span>
      </div>

      <button
        className={`relative flex justify-center px-4 py-2 my-1 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
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
