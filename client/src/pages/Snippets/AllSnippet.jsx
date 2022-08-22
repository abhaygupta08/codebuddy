import React, { useEffect } from 'react';
import axios from '../../api/axios';
import { ALL_PUBLIC_SNIPPETS } from '../../constants';
import Loader from '../../components/Loader';
import SnippetCard from './SnippetCard';
import useSearchParams from '../../hooks/useSearchParams';
import LeftArrow from '../../assets/leftArrow.svg';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';

export default function Snippets() {
  const params = useSearchParams();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = React.useState(true);
  const [AllSnippets, setAllSnippets] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState('');
  useEffect(() => {
    const temp = async () => {
      const response = await axios.get(ALL_PUBLIC_SNIPPETS, {
        withCredentials: true,
      });
      setAllSnippets(response.data);
      setIsLoading(false);
    };
    temp();
  }, []);

  return (
    <>
        <Helmet>
      <title>All Snippets</title>
      </Helmet>
      <main className='px-12 py-14'>
        {params?.snippetLanguage && (
          <>
            {' '}
            <button
              onClick={() => {
                navigate('./');
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
          </>
        )}
        <h1 className='text-3xl font-bold'>All Snippets</h1>
        <div>{params?.snippetLanguage}</div>
        <p className='text-sm opacity-60'>
          In this page user would be able to view their all public/private
          snippets and public snippets of other users.
          <br />
          <b>Pro Tip</b> :{' '}
          <i>
            You can filter the snippets based on{' '}
            <span className='font-bold'> Snippet Language </span> by clicking on
            it.
          </i>
        </p>
        <br />
        <hr />
        <br />

        <div className='flex justify-center my-8'>
          <input
            type='text'
            className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'

            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder='Search Snippet'
          />
        </div>
        
        {isLoading && <Loader width='20' height='20'  />}
        {AllSnippets?.filter((snippet) => {
            if (!params.snippetLanguage) return true;
            return snippet.snippetLanguage === params?.snippetLanguage;
          }).filter(snippet => snippet.snippetTitle.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))?.length === 0 && !isLoading && (
          <div className='text-xl text-center'>No Snippets found</div>
        )}
        <div className='flex flex-wrap justify-around gap-4'>
          {AllSnippets?.filter((snippet) => {
            if (!params.snippetLanguage) return true;
            return snippet.snippetLanguage === params?.snippetLanguage;
          }).filter(snippet => snippet.snippetTitle.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))?.map((snippet) => (
            <SnippetCard key={snippet.id} {...snippet} />
          ))}
        </div>
      </main>
    </>
  );
}
