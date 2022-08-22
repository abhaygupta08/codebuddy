import React, { useEffect } from 'react';
import Config from './Config';
import EditorComponent from './EditorComponent';
import IdeAction from './ideAction';
import Minimize from '../../../assets/minimize.svg';
import 'react-reflex/styles.css';
import axios from '../../../api/axios';
import { GET_PROBLEM_SET } from '../../../constants';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { ReflexContainer, ReflexSplitter, ReflexElement } from 'react-reflex';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import Tabs from './Tabs';
import { Helmet } from 'react-helmet';

export default function ProblemPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [selectedTheme, setSelectedTheme] = React.useState('vs-dark');
  const [selectedLanguage, setSelectedLanguage] = React.useState('C++');
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

  const [problem, setProblem] = React.useState({});
const [
  ioVisible , setIoVisible
] = React.useState(false);
  useEffect(() => {
    const temp = async () => {
      try {
        const { data } = await axios.get(
          GET_PROBLEM_SET + '/' + params.problemId,
          {
            withCredentials: true,
          }
        );
        // console.log(data);
        setProblem(data);
        setCode(data?.template);
        setInput(data?.testcase);
        setSelectedLanguage('C++');
        
        
      } catch (err) {
        console.log(err);
        if (err.response.status === 404) {
          toast.error('Problem not found');
          navigate('/problemset');
        }
      }
    };

    temp();
  }, []);

  return (
    <>
            <Helmet>
      <title>{problem?.title || ''} </title>
      </Helmet>

      <div className='relative flex justify-between w-full overflow-hidden bg-dark'>
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

        <ReflexContainer
          style={{
            height: '78.7vh',
          }}
          orientation='vertical'
        >
          <ReflexElement
            style={{
              width: '50%',
            }}
          >
            <ProblemComponent problem={problem} />
          </ReflexElement>

          <ReflexSplitter
            style={{
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'rgba(255,255,255,0.5)',
              backgroundColor: '#1e1e1e',
              textAlign: 'center',
              height: '76.5vw',
              width: '6px',
              zIndex: '1',
            }}
          />
          <ReflexElement>
            {isFullScreen ? (
              <EditorComponent
                isFullScreen={isFullScreen}
                selectedTheme={selectedTheme}
                selectedLanguage={selectedLanguage}
                code={code}
                setCode={setCode}
              />
            ) : (
              <ReflexContainer orientation='horizontal'>
                <ReflexElement
                flex={ioVisible ? 0 : 1}
                >
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
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'rgba(255,255,255,0.5)',
                    backgroundColor: '#1e1e1e',
                    textAlign: 'center',
                    width: '100%',
                    height: '6px',
                  }}
                ></ReflexSplitter>

                <ReflexElement 
                flex={ioVisible ? 1 : 1}
                size={ioVisible ? 800 : 50}
                  // style={{
                  //   flex: 'auto',
                  // }}
                >
                  <div
                  >
                    <Config
                    setIoVisible={setIoVisible}
                    ioVisible={ioVisible}
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
          </ReflexElement>
        </ReflexContainer>
      </div>
      <IdeAction
      setIoVisible={setIoVisible}
        code={code}
        input={input}
        selectedLanguage={selectedLanguage}
        setOutput={setOutput}
      />
    </>
  );
}

const ProblemComponent = ({ problem }) => {
  const tabList = [
    {
      name: 'Problem',
      component: <ProblemStatement problem={problem} />,
    },
    {
      name: 'Solution',
      component: <Solution problem={problem} />,
    },
  ];
  return <Tabs tabList={tabList} />;
};

const ProblemStatement = ({ problem }) => {
  return (
    <>
      <div className='px-6 py-8 text-white'>
        <Markdown remarkPlugins={[remarkGfm]} className='prose prose-invert'>
          {problem?.description?.replace(/\`/g, '')}
        </Markdown>
      </div>
    </>
  );
};

const Solution = ({ problem }) => {
  return (
    <>
      <div className='px-6 py-8 text-white'>
        <Markdown remarkPlugins={[remarkGfm]} className='prose prose-invert'>
          {problem?.solution?.replace(/\`/g, '')}
        </Markdown>
      </div>
    </>
  );
};
