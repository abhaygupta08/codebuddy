import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    const formData = new FormData(e.target);
    const tmp = {
      name: formData.get('name'),
      email: formData.get('email'),
      ref: 'cp-buddy',
      timestamp: new Date(),
    };
    // Add one line to the sheet
    fetch('https://sheet.best/api/sheets/e0955054-83b8-4f7d-a6ec-c919d09f7638', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(tmp),
    })
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
    // console.log(formData);
  };
  return (
    /* eslint-disable */
    <footer>
      <div className="footer-top">
        <div className="footer-left">
        {
          (formSubmitted) ?
          (<div style={{fontSize :'1.2rem' }}>We will contact you soon !</div>) 
          : (<>
              <h3>Any Query ?</h3>
                <form onSubmit={(e) => handleSubmit(e)} method="POST">
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Your email address" />
          <button type="submit">
            <span>Send</span>
            <span><i className="fa fa-arrow-right" /></span>
          </button>
        </form></>)
    }
      </div>
        <div className="footer-right">
          <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/show.jpg)` }} className="footer-right-img" />
          <div className="footer-right-bottom">
            <div>
              <Link to="/docs">Docs</Link>
            </div>
            <div>
              <Link to="/ide">IDE</Link>
            </div>
            <div>
              <Link to="/contest-schedule">Contests</Link>
            </div>
            <div>
              <Link to="/github">Github</Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="footer-links">
          <a href="https://github.com/abhaygupta08" target="_blank" rel="noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/assets/github-w.svg`}
              title="Go to GitHub Repository"
              alt="GitHub Icon"
            />
          </a>
          <a href="https://www.linkedin.com/in/abhaygupta08/" target="_blank" rel="noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/assets/linkedin-w.svg`}
              title="Go to LinkedIn Profile"
              alt="Linkedin Icon"
            />
          </a>
          <a href="https://twitter.com/abhay_gupta08" target="_blank" rel="noreferrer">
            <img
              src={`${process.env.PUBLIC_URL}/assets/twitter-w.svg`}
              title="Go to Twitter Profile"
              alt="Twitter Icon"
            />
          </a>
        </p>

        <div className="footer-data">
          <p>
            Crafted with&nbsp;
            <i className="fa fa-code" />
            &nbsp;by
            <strong> Abhay Gupta</strong>
          </p>
          <p>
            <strong>CP BUDDY</strong>
            - © 2021
          </p>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
