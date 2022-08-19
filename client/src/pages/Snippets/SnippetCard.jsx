import React from 'react';
import Public from '../../assets/eye.svg';
import Private from '../../assets/eye-off.svg';
import { createSearchParams } from 'react-router-dom';
import { useNavigate } from 'react-router';
import externalLink from '../../assets/external-link.svg'
import CopyIcon from '../../components/CopyIcon';
export default function SnippetCard({
  snippetTitle,
  snippetCode,
  snippetType,
  snippetLanguage,
  id,
  createdAt,
  author,
}) {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-2 px-6 py-4 overflow-x-hidden text-sm border rounded w-96'>
      <div className='flex items-end justify-between w-full gap-2'>
        <div className='flex flex-col w-full'>
          <button
          onClick={() => {
            navigate(`/snippets/${id}`)
          }}
            title={snippetTitle}
            className='text-lg font-semibold text-left whitespace-nowrap'
          >
            {snippetTitle?.length > 0
              ? snippetTitle.length > 33
                ? snippetTitle.substring(0, 30) + '...'
                : snippetTitle || '-'
              : '-'}
          </button>
          <div className='flex justify-between gap-2'>
            <span
              title={snippetLanguage}
              onClick={() => {
              //  alert('OPOPO')
                navigate({
                  pathname : './',
                  search : createSearchParams({
                    snippetLanguage : snippetLanguage,
                  }).toString()
                })
              }}
              className='whitespace-nowrap opacity-60 link-hover'
            >
              {snippetLanguage}
            </span>
            <div className='text-xs'>
              <span className='opacity-60 whitespace-nowrap'>
                Created at :{' '}
              </span>{' '}
              {createdAt}
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className='flex items-center justify-between gap-2'>
        <button
        onClick={() => {
          navigate(`/user/${author}`)
        }
        }
        >
          <span className='opacity-60 whitespace-nowrap'>Contributed by</span>{' '}
          <span className='link-hover'>{author}</span>
        </button>
        <div className='flex gap-2'>
          <div className='-mr-2'><CopyIcon text={`/snippets/${id}`} iconColor={'#666666'} /></div>
          <img
          className='mt-px'
            src={snippetType === 'Public' ? Public : Private}
            alt={snippetType}

            title={snippetType}
          />
          <img
          src={externalLink}
          alt={'external link'}
          title={'Open Snippet to use'}
          className='cursor-pointer'
          onClick={() => {
            navigate(`/snippets/${id}`)
          }
          }
          />
        </div>
      </div>
    </div>
  );
}
