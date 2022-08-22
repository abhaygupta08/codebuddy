import { useNavigate, useParams } from 'react-router';
import IDE from '../IDE';
import React, { useEffect } from 'react';
import axios from '../../api/axios';
import { ALL_PUBLIC_SNIPPETS } from '../../constants';
import { toast } from 'react-toastify';

export default function SnippetPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [responseData, setResponseData] = React.useState(null);
  useEffect(() => {
    const temp = async () => {
      try {
        const response = await axios.get(
          ALL_PUBLIC_SNIPPETS + '/' + params.snippetId,
          {
            withCredentials: true,
          }
        );
        setResponseData(response.data);
      } catch (error) {
        if (error.response.status === 404) {
          toast.error('No Snippet Found.', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate('/ide');
          return;
        } else if (error.response.status === 403) {
          toast.error('You are not authorized to view this snippet.', {
            position: 'bottom-right',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          navigate('/unauthorized');
          return;
        }
      }
    };
    temp();
  }, []);

  return (<>
      <IDE
      author={responseData?.author}
      snippetTitle={responseData?.snippetTitle}
      snippetCode={responseData?.snippetCode}
      snippetLanguage={responseData?.snippetLanguage}
      />
      </>
  );
}
