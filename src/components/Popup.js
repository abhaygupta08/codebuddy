import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './Popup.css';

const PopUpText = () => (
  <Popup
    trigger={(
      <img
        className="infoTrigger"
        style={{ cursor: 'pointer' }}
        src={`${process.env.PUBLIC_URL}/assets/info.svg`}
        alt="Info"
        width="25px"
        height="25px"
        title="Info"
      />
    )}
    modal
    nested
  >
    {(close) => (
      <div className="modal">
        <div className="modal__header">
          <div className="header">
            <h4>About Project</h4>
          </div>
          <button className="close" onClick={close} type="button">
            <img src={`${process.env.PUBLIC_URL}/assets/x-circle.svg`} alt="close" />
          </button>
        </div>
        <div className="content">
          {' '}
          <p>Welcome to CP BUDDY 👋</p>
          <br />
          <p>
            Using this application, we aim to produce an
            open-source contest notifier and a modern open-source compiler.
          </p>
          <p>
            The current features of the application include:
            <b>Code Runner , </b>
            <b>Upcoming and Ongoing Contests</b>
          </p>
          <br />
          <p>
            This is an
            <b>open-source project</b>
            and contributions are appreciated. If
            interested or you have any suggestion click&nbsp;
            <a href="/">GitHub</a>
            &nbsp;and raise an
            <b>issue.</b>
          </p>
        </div>
        <div className="actions">
          <button
            type="button"
            className="button"
            onClick={() => {
              close();
            }}
          >
            <a href="https://github.com/abhaygupta08">
              <img
                src={`${process.env.PUBLIC_URL}/assets/github.svg`}
                title="Go to GitHub Repository"
                alt="GitHub Icon"
              />
            </a>
          </button>
          <button
            type="button"
            className="button"
            onClick={() => {
              close();
            }}
          >
            <a href="https://www.linkedin.com/in/abhaygupta08/">
              <img
                src={`${process.env.PUBLIC_URL}/assets/linkedin.svg`}
                title="Go to GitHub Repository"
                alt="GitHub Icon"
              />
            </a>
          </button>
        </div>
      </div>
    )}
  </Popup>
);

export const BoundedTooltip = () => (
  <div
    style={{ height: 200, width: 400, border: '1px solid red' }}
    className="tooltipBoundary"
  >
    <Popup
      trigger={(
        <button type="button" className="button">
          Trigger 1
        </button>
      )}
      position="bottom right"
      closeOnDocumentClick
      keepTooltipInside=".tooltipBoundary"
    >
      Code Copied
    </Popup>
  </div>
);
export default PopUpText;
