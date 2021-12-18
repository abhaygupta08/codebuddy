import React from 'react';
import HashLoader from 'react-spinners/HashLoader';
import preload from './SplashScreen.module.css';

const Preloader = () => (
  <div className={preload.preload}>
    {/* <img
      className={preload.logo}
      src={`${process.env.PUBLIC_URL}/assets/main-logo.svg`}
      alt=""
      height="150rem"
    /> */}
    <br />
    <HashLoader size="50px" color="#fff" />
  </div>
);

export default Preloader;
