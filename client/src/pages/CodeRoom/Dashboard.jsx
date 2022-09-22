import React, { useContext, useEffect } from 'react';
import Tabs from './components/Tabs';
import AuthContext from '../../context/AuthProvider';
import Loader from '../../components/Loader';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router';
import { RANDOM_NAME } from '../../constants';
import axios from '../../api/axios';
import { Helmet } from 'react-helmet';

export default function CodeRoomDashboard({ socket }) {
  // useEffect(() => {

  //   socket.on('hello from server', (data) => {
  //     console.log(data);
  //   });
  // }, [socket]);

  const tabList = [
    {
      name: 'Join Room',
      component: <JoinRoom socket={socket} />,
    },
    {
      name: 'Create Room',
      component: <CreateRoom socket={socket} />,
    },
  ];

  return <Tabs baseUrl={''} tabList={tabList} />;
}

const JoinRoom = ({ socket }) => {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const [username, setUsername] = React.useState('');
  const [usernameDisabled, setUsernameDisabled] = React.useState(false);
  const [roomId, setRoomId] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    if (auth) {
      setUsername(auth.username);
      setUsernameDisabled(true);
    } else {
      const temp = async () => {
        try {
          const { data } = await axios.get(RANDOM_NAME);
          setUsername(data);
        } catch (error) {
          toast.error('Something went wrong');
        }
      };
      temp();
    }
  }, [auth]);

  const handleJoinRoom = () => {
    setIsLoading(true);
    // console.log(username, roomId);
    socket.emit('joinRoom', { username, roomId });
    navigate(`/code-room/${roomId}`);

    setIsLoading(false);
  };
  return (
    <>
        <Helmet>
      <title>Join Code Room </title>
      </Helmet>
          <div className='flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8'>
        <div className='w-full max-w-3xl space-y-8'>

      <div className='flex flex-col gap-4'>
        <h1 className='text-2xl font-bold text-gray-800'>
          Welcome to Code Room of Code Buddy App
        </h1>
        <p className='text-sm opacity-60'>
          A real Time collaborative editor with embeded compiler
        </p>

        <form className='flex flex-col max-w-sm gap-4 mt-4'>
          <input
            placeholder='Enter Username'
            type={'text'}
            value={username}
            disabled={usernameDisabled}
            onChange={(e) => setUsername(e.target.value)}
            className='relative block px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
          />

          <input
            required
            placeholder='Enter Room ID'
            type={'text'}
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className='relative block px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
          />

          <button
            disabled={isLoading}
            onClick={(e) => {
              e.preventDefault();
              handleJoinRoom();
            }}
            className='flex justify-center px-4 py-2 mx-auto text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md max-w-1/2 group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
            type='submit'
            >
            {isLoading ? (
              <div className='flex '>
                <Loader width='5' small={true} height='5' /> &nbsp;
                &nbsp;Processing
              </div>
            ) : (
              'Join Room'
            )}
          </button>
        </form>
      </div>
      </div>
      </div>
    </>
  );
};

const CreateRoom = ({ socket }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { auth } = useContext(AuthContext);
  const [username, setUsername] = React.useState('');
  const [usernameDisabled, setUsernameDisabled] = React.useState(false);
  const [roomId, setRoomId] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  useEffect(() => {
    if (auth?.username) {
      setUsername(auth.username);
      setUsernameDisabled(true);
    } else {
      toast.error('Please login to access this page !', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate(`/account/login?next=${location.pathname}`);
    }
  }, [auth]);

  const handleCreateRoom = () => {
    setIsLoading(true);
    if (!roomId) {
      setRoomId(username + `'s room`);
    }
    socket.emit('createRoom', {
      username: username,
      roomId: roomId || username + `'s room`,
    });

    navigate(`/code-room/${roomId || username + `'s room`}`);

    setIsLoading(false);
  };
  return (
    <>
            <Helmet>
      <title>Create Code Room </title>
      </Helmet>
      <div className='flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8'>
        <div className='w-full max-w-3xl space-y-8'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-2xl font-bold text-gray-800'>
              Welcome to Code Room of Code Buddy App
            </h1>
            <p className='text-sm opacity-60'>
              A real Time collaborative editor with embeded compiler
            </p>

            <form className='flex flex-col max-w-sm gap-4 mt-4'>
              <input
                placeholder='Enter Username'
                type={'text'}
                value={username}
                disabled={usernameDisabled}
                onChange={(e) => setUsername(e.target.value)}
                className='relative block px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
                required
              />

              <input
                placeholder='Enter Room ID'
                type={'text'}
                value={roomId}
                onChange={(e) => setRoomId(e.target.value)}
                className='relative block px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
              />

              <button
                onClick={(e) => {
                  e.preventDefault();

                  handleCreateRoom();
                }}
                className='flex justify-center px-4 py-2 mx-auto text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md max-w-1/2 group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
              type='submit'
              >
                {isLoading ? (
                  <div className='flex '>
                    <Loader width='5' small={true} height='5' /> &nbsp;
                    &nbsp;Processing
                  </div>
                ) : (
                  'Create Room'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
