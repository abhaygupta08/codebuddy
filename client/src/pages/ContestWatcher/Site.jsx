import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import Card from './components/Card';
import { ALL_CONTEST_URL } from '../../constants';
import axios from '../../api/axios';
import Loader from '../../components/Loader';
import constants from './constants';
import LeftArrow from '../../assets/leftArrow.svg';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Site() {
  const params = useParams();
  const navigate = useNavigate();
  const [AllContests, setAllContests] = React.useState([]);
  const [Contests, setContests] = React.useState([]);
  const [AllContestsToggle, setAllContestsToggle] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const fetchContests = async () => {
      const res = await axios.get(ALL_CONTEST_URL + '/' + params.site_name);
      setAllContests(res?.data);
    };
    fetchContests();
  }, []);

  useEffect(() => {
    setContests(AllContests.filter((contest) => contest.in_24_hours === true));
    setIsLoading(false);
  }, [AllContests]);

  useEffect(() => {
    if (AllContestsToggle) {
      setContests(AllContests);
    } else {
      setContests(Contests.filter((contest) => contest.in_24_hours === true));
    }
  }, [AllContestsToggle]);

  if (isLoading) {
    return <Loader width='20' height='20' />;
  }
  return (
    <>
            <Helmet>
      <title>{`${constants[params?.site_name]} - Contest Watcher`}</title>
      </Helmet>
      <main className='px-12 py-14'>
        <button
          onClick={() => {
            navigate('/contest-watcher');
          }}
          className='flex items-center text-xs'
        >
          <img
            src={LeftArrow}
            className='mt-px'
            width='16px'
            alt='left arrow'
          />
          <span className=''>Go Back</span>
        </button>
        <br />
        <h1 className='text-3xl font-bold'>Contest Watcher</h1>
        <div>{constants[params?.site_name]}</div>
        <p className='text-sm opacity-60'>
          This is a simple tool to help you keep track of upcoming contests so
          that you never miss any of them.
          <br />
          <b>Pro Tip</b> :{' '}
          <i>
            Contest currently running will be displayed with
            <span className='text-purple-600'> purple</span> color.
          </i>
        </p>
        <br />
        <hr />
        <br />

        <div className='flex justify-center w-full gap-2 my-8'>
          <label>
            {' '}
            <input type='checkbox' disabled checked /> Starts in 24 hours{' '}
          </label>
          <label>
            {' '}
            <input
              type='checkbox'
              onChange={() => setAllContestsToggle(!AllContestsToggle)}
            />{' '}
            All Contests{' '}
          </label>
        </div>

        {Contests?.length === 0 && !isLoading && (
          <div className='text-xl text-center'>No contests found</div>
        )}
        <div className='flex flex-wrap justify-around gap-4'>
          {Contests &&
            Contests?.map((contest, index) => {
              return <Card key={index} hideSite={true} {...contest} />;
            })}
        </div>
      </main>
    </>
  );
}
