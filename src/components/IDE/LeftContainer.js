/* eslint no-unused-vars: 0 */
import axios from 'axios';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Popup from 'reactjs-popup';
import PropTypes from 'prop-types';
import { useTheme } from '../../reducer/context/Themeprovider';

const useLangExtension = (ext) => {
  if (ext === 'py') return 'python';
  if (ext === 'cs') return 'csharp';
  return ext;
};

const LeftContainer = ({
  pre, ext, updateOutput, updateLoading,
}) => {
  const [copied, setCopied] = useState(false);
  const [code, setCode] = useState(pre);
  const [input, setInput] = useState(null);
  const { theme } = useTheme();

  const handleChange = (e) => {
    setCode(e.target.value);
  };
  const takeInput = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateLoading('true');

    const data = {
      stdin: input || '',
      files: [{
        name: `cpBuddy.${useLangExtension(ext)}`,
        content: code.trim(),
      }],
    };
    axios
      .post('https://cpbuddy-backend.herokuapp.com/api/v1', data)
      .then((res) => {
        updateLoading('false');
        // console.log(res);
        if (res.data.stderr && res.data.stderr.length > 0) return updateOutput(res.data.stderr, 'success');
        if (res.data.error && res.data.error.length > 0) return updateOutput(res.data.error, 'error');
        return updateOutput(res.data.stdout, 'response');
      })
      .catch((err) => updateOutput(err, 'error'));
  };

  return (
    <div className="left__container">
      <div className="header__info">
        <div className="file__name">
          <span>
            code.
            {ext}
          </span>
        </div>
        <div>
          {/* Button for download & Submit */}
          <button className="btn" type="button">
            <img
              title="Run"
              src={`${process.env.PUBLIC_URL}/assets/play.png`}
              alt="Submit Code"
              onClick={handleSubmit}
            />
          </button>
        </div>
      </div>
      <div
        className={`code__body ${
          theme === 'light' ? 'code__body_light-mode' : ''
        }`}
      >
        <div className="logger__head_left">
          <h3 className="logger__heading">Editor</h3>
          <div className="tooltipBoundary">
            <Popup
              trigger={(
                <button
                  type="button"
                  style={{ backgroundColor: 'blueviolet', border: 'none' }}
                >
                  <CopyToClipboard text={code} onCopy={() => setCopied(true)}>
                    <img
                      style={{ cursor: 'pointer' }}
                      width="24px"
                      src={`${process.env.PUBLIC_URL}/assets/copy.png`}
                      alt="Copy to ClipBoard"
                      title="Copy Code"
                    />
                  </CopyToClipboard>
                </button>
              )}
              position={['top center', 'bottom right', 'bottom left']}
              closeOnDocumentClick
              keepTooltipInside=".tooltipBoundary"
            >
              Copied!
            </Popup>
          </div>
        </div>
        <form>
          {/* textarea for codeblock */}
          <textarea
            className={`code__block ${
              theme === 'light' ? 'code__block_light-mode' : ''
            }`}
            spellCheck="false"
            placeholder="Input the Code Here"
            onChange={handleChange}
            defaultValue={pre}
          />
          {/* textarea for Input Data */}
          <textarea
            placeholder="Input the Data Here"
            spellCheck="false"
            onChange={takeInput}
            className={`input__block ${
              theme === 'light' ? 'input__block_light-mode' : ''
            }`}
            default={input}
          />
        </form>
      </div>
    </div>
  );
};
LeftContainer.propTypes = {
  pre: PropTypes.string.isRequired,
  ext: PropTypes.string.isRequired,
  updateOutput: PropTypes.func.isRequired,
  updateLoading: PropTypes.func.isRequired,
};
useLangExtension.propTypes = {
  ext: PropTypes.string.isRequired,
};

export default LeftContainer;
