import React, { useEffect } from 'react';
import Config from './Config';
import EditorComponent from './EditorComponent';
import IdeAction from './ideAction';
import Minimize from '../../assets/minimize.svg';
import { Helmet } from 'react-helmet';
export default function IDE({
  author,
  snippetTitle,
  snippetCode,
  snippetLanguage,
}) {
  // console.log(snippetLanguage);
  const [selectedTheme, setSelectedTheme] = React.useState('vs-dark');
  const [selectedLanguage, setSelectedLanguage] = React.useState('C++');
  const [code, setCode] = React.useState(
    localStorage.getItem('codebuddy_code') ||
      `#include<bits/stdc++.h>
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
  }`
  );
  useEffect(() => {
    if (snippetCode && snippetLanguage) {
      setCode(snippetCode);
      setSelectedLanguage(snippetLanguage);
    }
  }, [snippetCode, snippetLanguage]);
  const [output, setOutput] = React.useState('');
  const [input, setInput] = React.useState('');

  const [isFullScreen, setIsFullScreen] = React.useState(false);
  const [info, setInfo] = React.useState(null);
  useEffect(() => {
    localStorage.setItem('codebuddy_code', code);
    setInfo(`Last Saved at ${new Date().toLocaleString()}`);
  }, [code]);
  return (
    <>
            <Helmet>
      <title>{snippetTitle ||'IDE'}</title>
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
        <EditorComponent
          isFullScreen={isFullScreen}
          selectedTheme={selectedTheme}
          selectedLanguage={selectedLanguage}
          code={code}
          setCode={setCode}
        />
        <div
          className={`${
            isFullScreen ? 'hidden w-0' : 'flex w-3/12'
          } transition-all duration-200 linear`}
        >
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
      </div>
      <IdeAction
        author={author}
        snippetTitle={snippetTitle}
        info={info}
        code={code}
        input={input}
        selectedLanguage={selectedLanguage}
        setOutput={setOutput}
      />
    </>
  );
}
