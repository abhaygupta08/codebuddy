import React from 'react';
import { Link } from 'react-router-dom';
import PopupText from '../Popup';
import ThemeToggler from '../ThemeToggler/ThemeToggler';
import './Navbar.css';

const NavBar = () => {
  const [navOpen, setNavOpen] = React.useState(false);
  const [sidebarWidth, setSidebarWidth] = React.useState('0vw');
  React.useEffect(() => {
    if (navOpen) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = 'auto';
    setTimeout(() => {
      setSidebarWidth('100vw');
    }, 400);
  }, [navOpen]);

  return (
    <div className="top__nav">
      <div className="logo__info">
        <img
          src={`${process.env.PUBLIC_URL}/assets/main-logo.svg`}
          alt="site logo"
          width="30px"
        />
        <Link id="logo__name" to="/">
          <b>
            CP BUDDY
          </b>
        </Link>
      </div>
      <div className="info__section">
        <div className="min-infoSec">
          <span>
            <Link to="/docs">Docs</Link>
          </span>
          <span>
            <Link to="/ide">IDE</Link>
          </span>
          <span>
            <Link to="/contest-schedule">Contests</Link>
          </span>
        </div>
        <ThemeToggler />
        <a href="https://github.com/abhaygupta08">
          <img
            src={`${process.env.PUBLIC_URL}/assets/github.svg`}
            title="Go to GitHub Repository"
            alt="GitHub Icon"
          />
        </a>
        <PopupText />
      </div>
      <button type="button" className={`toggleIcon ${navOpen ? 'active' : ''}`} onClick={() => setNavOpen(!navOpen)}>

        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 200 200">
          <g strokeWidth="6.5" strokeLinecap="round">
            <path
              d="M72 82.286h28.75"
              fill="#009100"
              fillRule="evenodd"
              stroke="#000"
            />
            <path
              d="M100.75 103.714l72.482-.143c.043 39.398-32.284 71.434-72.16 71.434-39.878 0-72.204-32.036-72.204-71.554"
              fill="none"
              stroke="#000"
            />
            <path
              d="M72 125.143h28.75"
              fill="#009100"
              fillRule="evenodd"
              stroke="#000"
            />
            <path
              d="M100.75 103.714l-71.908-.143c.026-39.638 32.352-71.674 72.23-71.674 39.876 0 72.203 32.036 72.203 71.554"
              fill="none"
              stroke="#000"
            />
            <path
              d="M100.75 82.286h28.75"
              fill="#009100"
              fillRule="evenodd"
              stroke="#000"
            />
            <path
              d="M100.75 125.143h28.75"
              fill="#009100"
              fillRule="evenodd"
              stroke="#000"
            />
          </g>
        </svg>
      </button>
      {navOpen === true ? (
        <div className="sidebar">
          {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
          <div className="sidebar-overlay" onClick={() => setNavOpen(false)} />
          <div style={{ width: sidebarWidth }} className="sidebar-content">
            <div className="top-head">
              <div className="logo__info">
                <Link id="logo__name" to="/">
                  <img
                    onClick={() => setNavOpen(false)}
                    src={`${process.env.PUBLIC_URL}/assets/main-logo.svg`}
                    alt="site logo"
                    width="30px"
                  />
                </Link>
              </div>
            </div>
            <div className="nav-left">
              <Link to="/docs" onClick={() => setNavOpen(false)}>
                <div className="menuitem-mobile">
                  <img src={`${process.env.PUBLIC_URL}/assets/book.svg`} alt="book Icon" />
                  <span>Docs</span>
                </div>
              </Link>
              <Link to="/ide" onClick={() => setNavOpen(false)}>
                <div className="menuitem-mobile">
                  <img src={`${process.env.PUBLIC_URL}/assets/code.svg`} alt="IDE Icon" />
                  <span>IDE</span>
                </div>
              </Link>
              <Link to="/contest-schedule">
                {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
                <div className="menuitem-mobile" onClick={() => setNavOpen(false)}>
                  <img src={`${process.env.PUBLIC_URL}/assets/calendar.svg`} alt="IDE Icon" />
                  <span>Contests</span>
                </div>
              </Link>
              {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
              <div className="mobile-menu-links" onClick={() => setNavOpen(false)}>
                <ThemeToggler />
                <a href="https://github.com/abhaygupta08">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/github.svg`}
                    title="Go to GitHub Repository"
                    alt="GitHub Icon"
                  />
                </a>
                <PopupText />
              </div>
            </div>
          </div>
        </div>
      ) : ('')}
    </div>
  );
};

export default NavBar;
