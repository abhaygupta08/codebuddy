import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useTheme } from '../../reducer/context/Themeprovider';

const Home = () => (
  <div className="home-page">
    <center>
      <br />
      <h1 style={{ fontSize: '2.5rem' }}>CP BUDDY</h1>
      <br />
      <br />
      <br />
      <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/tmp.jpg)` }} className="mainCover" />
      <div className="card-contain">
        <Card title="Code Runner" description="Code Runner allows you to Run code snippet or code file for multiple languages: C, C++, Java, Python etc" link="/ide" linkText="IDE" widthB="100px" image={`${process.env.PUBLIC_URL}/assets/dev.gif`} />
        <Card title="Contest Schedule" description="This module allows you to view Online Upcoming and Coding contests from various plateforms like LeetCode, Codechef, Codeforces." image={`${process.env.PUBLIC_URL}/assets/cp.gif`} link="/contest-schedule" linkText="Contest Schedule" widthB="220px" />
      </div>
    </center>
  </div>
);

export default Home;

const Card = (
  {
    title, description, image, link, linkText, widthB,
  },
) => {
  const { theme } = useTheme();
  return (
    <div className={`home-card ${theme === 'dark' ? '' : 'light'}`}>
      <div style={{ backgroundImage: `url(${image})` }} className="card-img" />
      <h1>{title}</h1>
      <br />
      <p>{description}</p>
      <br />
      <Link to={`${link}`} style={{ width: widthB }} className="card-link">
        <span>{linkText}</span>
        <span><i className="fa fa-arrow-right" /></span>
      </Link>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  widthB: PropTypes.string.isRequired,
};
