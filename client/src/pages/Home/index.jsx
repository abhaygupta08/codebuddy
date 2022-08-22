import React, { useEffect } from 'react';
import Footer from '../../components/Footer';
import codeBuddy from '../../assets/codeBuddy.svg';
import ideScreenshot from '../../assets/ideScreenshot.png';
import { useNavigate } from 'react-router';
import hash from '../../assets/hash.svg';
import theme from '../../assets/theme.svg';
import contestWatcherScreenshot from '../../assets/contestWatcherScreenshot.png';
import calendar from '../../assets/calendar_purple.svg';
import list from '../../assets/list.svg';
import filter from '../../assets/filter.svg';
import Feedback from './components/Feedback';
import Loader from '../../components/Loader';
import Share from '../../assets/Share.svg';
export default function Home() {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  const navigate = useNavigate();

  if (isLoading) return <Loader width='20' height='20' />;
  return (
    <>
      <main className='relative flex flex-col justify-center gap-4 px-12 py-14 homeBg'>
        <div className='flex flex-col items-center gap-6'>
          <img className='w-28 h-28' src={codeBuddy} alt='logo' />
          <h1 className='max-w-3xl text-5xl font-black text-center text-gray-800'>
            Helps you to code, share the code and watch out contests
          </h1>
          <p className='max-w-2xl text-center opacity-75 text-md'>
            This Web Application aims to provide a plateform for the users using
            which they can code online, share the code with friends have a look
            over varoius coding contest.
          </p>
        </div>
        <ScreenshotCard
          img={ideScreenshot}
          content={'run code in 40+ languages'}
        />
        <NavigateBtn link='/ide' label='Try out IDE' />

        <div className='relative my-20'>
          <h2 className='max-w-4xl mb-8 text-3xl '>
            <span className='font-bold text-purple-600'>code</span> with more
            power
          </h2>
          <div className='flex flex-wrap items-center gap-4'>
            <FeatureCard
              content={
                <span>
                  <span className='text-purple-600'>40+ coding languages</span>{' '}
                  are publicly avaliable to use by the user in Integrated IDE.
                </span>
              }
              img={hash}
            />
            <FeatureCard
              content={
                <span>
                  To enhance the user experience, more than{' '}
                  <span className='text-purple-600'>two themes </span>are
                  supported.
                </span>
              }
              img={theme}
            />
            <FeatureCard
              content={
                <span>
                  User will have the power to{' '}
                  <span className='text-purple-600'>save a snippet</span> and{' '}
                  <span className='text-purple-600'>share snippet</span> to your
                  peers.
                </span>
              }
              img={Share}
            />
          </div>
        </div>
        <ScreenshotCard
          img={contestWatcherScreenshot}
          content={'track and participate in contests'}
        />
        <NavigateBtn
          link='/contest-watcher'
          label='View all Upcoming Contests'
        />

        <div className='relative my-20'>
          <h2 className='max-w-4xl mb-8 text-3xl '>
            <span className='font-bold text-purple-600'>participate</span> with
            more power
          </h2>
          <div className='flex flex-wrap items-center gap-4'>
            <FeatureCard
              content={
                <span>
                  Have feature to{' '}
                  <span className='text-purple-600'>
                    add contest to google calender
                  </span>
                  , so that user never miss any of them.
                </span>
              }
              img={calendar}
            />
            <FeatureCard
              content={
                <span>
                  This page will{' '}
                  <span className='text-purple-600'>
                    list all the contests happening{' '}
                  </span>
                  within a day and all upcoming contests.
                </span>
              }
              img={list}
            />
            <FeatureCard
              content={
                <span>
                  This module has micro-feature to
                  <span className='text-purple-600'>
                    {' '}
                    filter contests by site{' '}
                  </span>
                  hosting the contest.
                </span>
              }
              img={filter}
            />
          </div>
        </div>

        <Feedback />
      </main>
      <Footer />
    </>
  );
}

const ScreenshotCard = ({ img, content }) => {
  return (
    <div className='relative max-w-4xl mx-auto my-14'>
      <div className='absolute px-6 py-4 bg-white border rounded-r-full rounded-l-xl drop-shadow-2xl bottom-6 -left-20'>
        <code>
          <span className='mr-2 opacity-60'>$</span>
          <i className='opacity-80'> {content}</i>
        </code>
      </div>
      <header className='flex gap-2 px-8 py-5 rounded-t-3xl bg-dark'>
        <span className='w-5 h-5 border rounded-full' />
        <span className='w-5 h-5 border rounded-full' />
        <span className='w-5 h-5 border rounded-full' />
      </header>
      <div className='overflow-hidden bg-white border-l border-r rounded-b-3xl'>
        <img src={img} alt='Screenshot' loading='lazy' />
      </div>
    </div>
  );
};

const FeatureCard = ({ content, img, customClass }) => {
  return (
    <div className='flex flex-col max-w-sm gap-4 px-6 py-6 transition-shadow duration-200 bg-white border shadow-lg rounded-xl hover:shadow-2xl'>
      {content}
      <div className='flex justify-end'>
        <div
          style={{
            background: '#F9F9F9',
          }}
          className='p-4 border rounded-t-full rounded-l-full w-14 rounded-br-xl '
        >
          <img className={customClass} src={img} alt='featureIcon' />
        </div>
      </div>
    </div>
  );
};

const NavigateBtn = ({ link, label = 'Try out IDE' }) => {
  const navigate = useNavigate();

  return (
    <div className='relative max-w-4xl mx-auto'>
      <button
        onClick={() => navigate(link)}
        className='px-6 py-4 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md w-max participateBtn group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
      >
        <span className='whitespace-nowrap'> {label} </span>
        <div />
      </button>
    </div>
  );
};
