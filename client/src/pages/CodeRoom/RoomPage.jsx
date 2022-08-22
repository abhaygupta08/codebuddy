import React, { useContext, useEffect } from 'react';
import Config from './Config';
import EditorComponent from './EditorComponent';
import IdeAction from './ideAction';
import Minimize from '../../assets/minimize.svg';
import { useNavigate, useParams } from 'react-router';
import axios from '../../api/axios';
import { GET_ROOM_USERS } from '../../constants';
import { toast } from 'react-toastify';
import AuthContext from '../../context/AuthProvider';
import 'react-reflex/styles.css';

import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { Helmet } from 'react-helmet';

export default function RoomPage({ socket }) {
  const params = useParams();
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const [selectedTheme, setSelectedTheme] = React.useState('vs-dark');
  const [selectedLanguage, setSelectedLanguage] = React.useState('C++');
  const [isRunCodeLoading, setIsRunCodeLoading] = React.useState(false);
  const [code, setCode] = React.useState(`#include<bits/stdc++.h>
  using namespace std;
  
  void code_buddy() {
      // code here
      cout<<"Welcome to Code Buddy :)";
  }
  
  int main() {
      ios_base::sync_with_stdio(0);
      cin.tie(0); cout.tie(0);
      int tc = 1;
      cin >> tc;
      for (int t = 1; t <= tc; t++) {
          // cout << "Case #" << t << ": ";
          code_buddy();
      }
  }`);
  const [output, setOutput] = React.useState('');
  const [input, setInput] = React.useState('');

  const [isFullScreen, setIsFullScreen] = React.useState(false);

  useEffect(() => {
    socket.emit('editorConfigChange', {
      roomId: params.roomId,
      config: {
        selectedTheme,
        selectedLanguage,
        code,
        isFullScreen,
        input,
        output,
        isRunCodeLoading
      },

    });
  }, [isRunCodeLoading,isFullScreen, input, output, code, selectedLanguage, selectedTheme]);
  useEffect(() => {
    socket.on('editorConfigChange', (data) => {
      // console.log(data);
      setSelectedTheme(data?.selectedTheme);
      setSelectedLanguage(data?.selectedLanguage);
      setCode(data?.code);
      setIsFullScreen(data?.isFullScreen);
      setInput(data?.input);
      setOutput(data?.output);
    setIsRunCodeLoading(data?.isRunCodeLoading);
      
    });
    
  }, [socket, params.roomId]);

  useEffect(() => {
    return () => {
      socket.emit('removeUser');
    };
  }, []);

  useEffect(() => {
    const temp = async () => {
      try {
        const { data } = await axios.post(GET_ROOM_USERS, {
          roomId: params.roomId,
        });

        if (data?.length === 0) {
          toast.error('Room does not exist');
          navigate('/code-room');
        } else {
          // toast.error('Join room with room id ' + params.roomId);
          // navigate('/code-room');
          // console.log(data);
          socket.emit('joinRoom', {
            roomId: params.roomId,
            username: auth?.username || 'Anonymous',
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    temp();
  }, [auth]);

  useEffect(() => {
    toast.info('Joined Room, Share this link with your friends to make them join');
  } , []);
  return (
    <>
        <Helmet>
      <title>{`${params?.roomId} - Code Room`}</title>
      </Helmet>
      <div className='relative flex justify-between w-full overflow-x-hidden bg-dark'>
        <div
          className={`absolute z-20 ${
            isFullScreen ? 'right-5' : '-right-20'
          } top-2 transition-transform duration-200`}
          onClick={() => {
            setIsFullScreen(!isFullScreen);
          }}
        >
          <img className='cursor-pointer' src={Minimize} alt='Minimize' />
        </div>

        {isFullScreen ? (
          <EditorComponent
            isFullScreen={isFullScreen}
            selectedTheme={selectedTheme}
            selectedLanguage={selectedLanguage}
            code={code}
            setCode={setCode}
          />
        ) : (
          <ReflexContainer style={{ height: '78.5vh' }} orientation='vertical'>
            <ReflexElement minSize='200' className='left-pane'>
              <EditorComponent
                isFullScreen={isFullScreen}
                selectedTheme={selectedTheme}
                selectedLanguage={selectedLanguage}
                code={code}
                setCode={setCode}
              />
            </ReflexElement>
            <ReflexSplitter
              style={{
                border : '1px solid rgba(255,255,255,0.2)',
                color : 'rgba(255,255,255,0.5)',
                backgroundColor: '#1e1e1e',
                textAlign: 'center',
                width: '6px',
              }}
            >
              {/* <div class='splitter'>. . .</div> */}
            </ReflexSplitter>

            <ReflexElement className={`right-pane`} minSize='200' maxSize='400'>
              <div>
                 <Config
                  setCode={setCode}
                  selectedTheme={selectedTheme}
                  setSelectedTheme={setSelectedTheme}
                  selectedLanguage={selectedLanguage}
                  setSelectedLanguage={setSelectedLanguage}
                  isFullScreen={isFullScreen}
                  setIsFullScreen={setIsFullScreen}
                  output={output}
                  setOutput={setOutput}
                  input={input}
                  setInput={setInput}
                />
              </div>
            </ReflexElement>
          </ReflexContainer>
        )}
      </div>
      <IdeAction
      isLoading={isRunCodeLoading}
      setIsLoading={setIsRunCodeLoading}
        socket={socket}
        code={code}
        input={input}
        selectedLanguage={selectedLanguage}
        setOutput={setOutput}
      />
    </>
  );
}
