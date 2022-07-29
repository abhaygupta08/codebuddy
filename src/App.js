import React, { useState, useEffect } from 'react';
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Main from './components/IDE/Main';
import NavBar from './components/Navbar';
import './App.css';
import Preloader from './components/Splash Screen/SplashScreen';
import './components/Home/Home.css';
import ContestSchedule from './components/ContestSchedule';
import { useTheme } from './reducer/context/Themeprovider';
import Home from './components/Home';

const App = () => {
  const { theme, setTheme } = useTheme();
  React.useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = 'var(--darktext)';
    } else {
      document.body.style.backgroundColor = 'var(--darkPanel)';
    }
  }, [theme]);
  // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setTheme('dark');
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ? (
    // If page is still loading then splash screen
    <Preloader />
  ) : (
    <div className="App">
      {/* Landing Navigation Bar */}

      {/* Main Container */}

      <Router basename="/">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/contest-schedule" element={<ContestSchedule />} />
          <Route exact path="/ide" element={<Main />} />
          <Route exact path="/docs" element={<Docs />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </Router>

      {/* Footer Container */}

    </div>
  );
};

const Docs = () => (
  <center>
    <div className="docs-container">
      <h1> Docs </h1>
      <br />
      <br />
      <div>
        Link for Code Runner API :
        &nbsp;
        <a href="https://cpbuddy-backend.herokuapp.com/">CP-Buddy Backend</a>
      </div>
      <br />
      <div>
        Link for Contest Schedule API :
        &nbsp;
        <a href="https://kontests.net/api">Kontests API</a>
      </div>
    </div>
  </center>
);
export default App;
