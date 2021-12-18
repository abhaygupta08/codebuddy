import React, { useState } from 'react';
import './Main.css';
import PropTypes from 'prop-types';

const SelectBar = ({ changeLanguage }) => {
  const [lang, setLang] = useState('cpp');
  const handleClick = (e, value) => {
    setLang(value);
    changeLanguage(value);
  };
  return (
    <div className="select__bar">
      <button type="button" onClick={(e) => handleClick(e, 'c')} className={`${lang === 'c' ? 'lang-active' : ''} lang-button`}>
        C
      </button>
      <button type="button" onClick={(e) => handleClick(e, 'cpp')} className={`${lang === 'cpp' ? 'lang-active' : ''} lang-button`}>
        C++
      </button>
      <button type="button" onClick={(e) => handleClick(e, 'java')} className={`${lang === 'java' ? 'lang-active' : ''} lang-button`}>
        Java
      </button>
      <button type="button" onClick={(e) => handleClick(e, 'py')} className={`${lang === 'py' ? 'lang-active' : ''} lang-button`}>
        Python
      </button>
      <button type="button" onClick={(e) => handleClick(e, 'cs')} className={`${lang === 'cs' ? 'lang-active' : ''} lang-button`}>
        C#
      </button>
    </div>
  );
};
SelectBar.propTypes = {
  changeLanguage: PropTypes.func.isRequired,
};
export default SelectBar;
