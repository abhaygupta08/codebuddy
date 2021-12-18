/* eslint linebreak-style: ["error", "windows"] */
import React from 'react';
import './ContestSchedule.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { useTheme } from '../../reducer/context/Themeprovider';

function getDate(time) {
  const date = new Date(time);
  const newDate = date.toDateString();
  return newDate;
}

function getTime(t) {
  const time = new Date(t);
  const newTime = time.toLocaleTimeString();
  return newTime;
}
const ContestSchedule = () => {
  const { theme } = useTheme();
  const [CurrentContest, setCurrentContest] = React.useState('all');
  const [contests, setContests] = React.useState(null);
  React.useEffect(() => {
    axios.get(`https://kontests.net/api/v1/${CurrentContest}`).then((res) => {
      setContests(res.data);
    });

    // axios.get(`/api/contests/${CurrentContest}`).then((res) => {
    //   setContests(res.data.result);
    // });
  }, [CurrentContest]);

  if (!contests) {
    return <div style={{ paddingTop: '500px' }}><Loader className="loader" width="100" height="100" type="Rings" color="blueviolet" /></div>;
  }
  return (
    <>
      <div className="ContestSchedule">
        <h1 className="contest-main-header">Programming Contests</h1>
        <div className="contest-form">
          <form action="" method="POST" className="form">
            <select
              name=""
              onChange={(e) => setCurrentContest(e.target.value)}
              id="contest-site"
              value={CurrentContest}
              className={`form-control ${theme === 'dark' ? 'dark-theme' : ''}`}
            >
              <option value="all">All Contest</option>
              <option value="codeforces">Codeforce</option>
              <option value="codeforces_gym">Codeforce::Gym</option>
              <option value="hacker_rank">HackerRank</option>
              <option value="hacker_earth">HackerEarth</option>
              <option value="top_coder">TopCoder</option>
              <option value="at_coder">AtCoder</option>
              <option value="code_chef">CodeChef</option>
              <option value="cs_academy">CS Academy</option>
              <option value="kick_start">Kick Start</option>
              <option value="leet_code">LeetCode</option>
            </select>
          </form>
        </div>
      </div>

      <div className="contest-container">
        <div className="row" id="contest-row">{contests.length > 0 ? contests.map((r) => (<Contest key={r?.name} r={r} />)) : 'No contest is happening at this moment'}</div>
      </div>
    </>
  );
};

export default ContestSchedule;

const Contest = ({ r }) => {
  const { theme } = useTheme();
  const startDate = getDate(r?.start_time);
  const endDate = getDate(r?.end_time);

  const startTime = getTime(r?.start_time);
  const endTime = getTime(r?.end_time);

  return (
    <div className="contest">
      <h3 className="contest-header">{r?.name}</h3>
      <p className="start-time">
        <strong> Start Date : </strong>
        {startDate}
      </p>
      <p className="start-time">
        <strong> Start Time : </strong>
        {startTime}
      </p>
      <p className="end-time">
        <strong> End Date : </strong>
        {endDate}
      </p>
      <p className="end-time">
        <strong> End Time : </strong>
        {endTime}
      </p>
      <p className="in_24">
        <strong> In 24_hours : </strong>
        {r?.in_24_hours}
      </p>
      <a href={r?.url} target="_blank" rel="noreferrer">
        <button type="button" className="contest-link" style={{ background: theme === 'dark' ? 'none' : '' }}>
          <span>Take me There </span>
          <span>
            <img
              src={`${process.env.PUBLIC_URL}/assets/chevron-right.svg`}
              alt="right-arrow"
              height="20px"
            />
          </span>
        </button>
      </a>
    </div>
  );
};
Contest.propTypes = {
  r: PropTypes.objectOf(PropTypes.string).isRequired,
};
