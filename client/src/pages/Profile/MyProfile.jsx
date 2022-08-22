import Loader from '../../components/Loader';
import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import AuthContext from '../../context/AuthProvider';
import SnippetCard from '../Snippets/SnippetCard';
import axios from '../../api/axios';
import { ALL_PUBLIC_SNIPPETS } from '../../constants';
import { useParams } from 'react-router';
import { Helmet } from 'react-helmet';

export default function MyProfile() {
  const params = useParams();
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);

  const [user, setUser] = React.useState(params?.username || auth?.username);

  useEffect(() => {
    setUser(params?.username || auth?.username);
  }, [params, auth]);
  useEffect(() => {
    if (!auth && !params?.username) {
      navigate('/account/login', { replace: true });
    }
  }, [auth]);
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
      <title>{ params?.username || auth?.username || ''}</title>
      </Helmet>
      <main className='px-12 py-14'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <div className='flex items-center justify-center overflow-hidden font-bold text-white bg-gray-800 rounded-full text-9xl w-36 h-36'>
            <div className='mb-2'>{user?.at(0).toLocaleUpperCase()}</div>
          </div>
          <span className='text-3xl font-semibold'>{user}</span>
        </div>
        <br />
        <br />
        <h1 className='text-3xl font-bold'>My Snippets</h1>
        <p className='text-sm opacity-60'>
          {params?.username
            ? 'In this page user would be able to view all public snippets of other user.'
            : 'In this page user would be able to view their all public/private snippets.'}
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

        {isLoading && <Loader width='20' height='20' />}
        {AllSnippets?.filter((snippet) => snippet.author === user)?.filter(
          (snippet) =>
            snippet.snippetTitle
              .toLocaleLowerCase()
              .includes(searchTerm.toLocaleLowerCase())
        )?.length === 0 &&
          !isLoading && (
            <div className='text-xl text-center'>No Snippets found</div>
          )}
        <div className='flex flex-wrap justify-around gap-4'>
          {AllSnippets?.filter((snippet) => snippet.author === user)
            ?.filter((snippet) =>
              snippet.snippetTitle
                .toLocaleLowerCase()
                .includes(searchTerm.toLocaleLowerCase())
            )
            ?.map((snippet) => (
              <SnippetCard key={snippet.id} {...snippet} />
            ))}
        </div>
      </main>
    </>
  );
}
