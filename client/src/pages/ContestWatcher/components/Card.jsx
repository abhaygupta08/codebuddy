import React from 'react';
import { useNavigate } from 'react-router';
import constants from '../constants.js';
import useTimeString from '../../../hooks/useTimeString';
import calendar from '../../../assets/calendar.svg';
import ParticipateBtn from './ParticipateBtn.jsx';

export default function Card({
  contest_name,
  site_name,
  duration,
  url,
  start_time,
  end_time,
  site_logo,
  currently_running,
  hideSite = false,
}) {
  const navigate = useNavigate();
  return (
    <div
      className={`flex flex-col gap-2 px-6 py-4 overflow-x-hidden text-sm border rounded w-96 ${
        currently_running && 'bg-purple-300'
      }`}
    >
      <div className='flex items-center justify-between gap-4'>
        <div
          onClick={() => navigate(`./${constants[site_name]}`)}
          className='w-[68px] p-2 border rounded'
        >
          <img
            className='cursor-pointer'
            width='60px'
            src={site_logo}
            alt='Logo'
          />
        </div>
        <div className='flex items-end justify-between w-full gap-2'>
          <div className='flex flex-col w-full'>
            <span
              title={contest_name}
              className='text-lg font-semibold whitespace-nowrap'
            >
              {contest_name?.length > 0
                ? contest_name.length > 33
                  ? contest_name.substring(0, 30) + '...'
                  : contest_name || '-'
                : '-'}
            </span>
            <div className='flex justify-between gap-2'>
              {!hideSite && (
                <span
                  title={site_name}
                  onClick={() => navigate(`./${constants[site_name]}`)}
                  className='whitespace-nowrap opacity-60 link-hover'
                >
                  {site_name}
                </span>
              )}
              <div>
                <span className='opacity-60 whitespace-nowrap'>Lasts for</span>{' '}
                {duration}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex items-center justify-between gap-2 text-xs'>
        <span>
          <span className='opacity-60'>Starts on :</span>{' '}
          {useTimeString(start_time)}
        </span>
        <span>
          <span className='opacity-60'>Ends on :</span>{' '}
          {useTimeString(end_time)}
        </span>
      </div>
      <div className='flex items-center justify-between gap-2 mt-2'>
        <a
          className=' flex gap-2 items-center w-max px-4 py-1.5 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md participateBtn group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500'
          href={`http://www.google.com/calendar/event?action=TEMPLATE&dates=${start_time.replace(
            /-|:|\.\d\d\d/g,
            ''
          )}%2F${end_time.replace(
            /-|:|\.\d\d\d/g,
            ''
          )}&text=${encodeURIComponent(
            contest_name
          )}%20%20%7C%20Code%20Buddy&location=${encodeURIComponent(
            site_name
          )}&details=Link%20to%20contest%20-%20${url}%0A%0AThis%20event%20was%20generated%20by%20Code%20Buddy`}
          target='_blank'
          rel='nofollow'
        >
          <img
            src={calendar}
            alt='Add to Google Calendar'
            title='Add to Google Calendar'
          />
          Add to Calendar
        </a>
        <ParticipateBtn link={url} text={'More Details'} />
      </div>
    </div>
  );
}
