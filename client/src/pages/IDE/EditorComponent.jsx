import React from 'react';
import Editor from '@monaco-editor/react';
import Loader from '../../components/Loader';
import Constants from './Constants';
export default function EditorComponent({
  selectedTheme,
  selectedLanguage,
  code,
  setCode,
  isLoading,
  isFullScreen,
}) {
  return (
    <Editor
      width={isFullScreen ? '100%' : '75%'}
      height='78.5vh'
      theme={selectedTheme}
      loading={<Loader width='20' height='20' />}
      language={Constants.languages[selectedLanguage]}
      value={code}
      onChange={setCode}
      options={{
        selectOnLineNumbers: true,
        automaticLayout: true,
        renderControlCharacters: true,
        renderWhitespace: true,
        renderIndentGuides: true,
        renderLineHighlight: true,
        renderLineNumbers: true,
        renderValidationDecorations: true,

        fontFamily: 'Dank Mono Regular',
        fontLigatures: true,
        fontSize: '17px',
        wordWrap: true,
        minimap: {
          enabled: true,
        },
        dragAndDrop: true,
        mouseWheelZoom: true,
      }}
    />
  );
}
