import React from 'react';
import Loader from '../../../components/Loader';
import funnyRes from '../../../assets/funnyRes.gif';
import axios from '../../../api/axios';
import { FEEDBACK_API } from '../../../constants';
export default function Feedback() {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');
const [isLoading, setIsLoading] = React.useState(false);
const [isSuccess, setIsSuccess] = React.useState(false);
const [error , setError] = React.useState('');

  const handleSubmit = async  e => {
    if(!email || !message) {
      setError('Please fill all the fields');
      return;
    }
    setIsLoading(true);
    e.preventDefault();
    // console.log(email, message);
    try{
      await axios.post(FEEDBACK_API, {email, message});
      setIsSuccess(true);
    }
    catch(err) {
      setError('Server Error');
    }
    finally{

      setIsLoading(false);
    }
  }

  return (
    <div className='relative max-w-4xl mx-auto my-20'>
      <h2 className='max-w-4xl text-4xl text-center'>Feedback / Suggestions</h2>
      <p className='text-sm text-center opacity-60'>
        We would love to hear some words about our product.
      </p>
      {isSuccess ? <div className='text-center text-green-500 my-14'>
        <img src={funnyRes} alt='funnyRes' />
        <br/>Thanks for your feedback. ✨</div> :
      <form className='flex flex-col gap-4 my-14'>
        <p className='text-sm text-center text-red-600'>{error || ''}</p>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
          type='email'
          placeholder='Please enter your email'
          required
          autoComplete='email'
        />
      <textarea
        required
        rows='5'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md appearance-none resize-none no-scrollbar focus:outline-none focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-sm'
        placeholder={'Please enter your message'}
      />
                <button
                type='submit'
              className="relative flex justify-center w-full px-4 py-3 text-sm font-medium text-white bg-purple-600 border border-transparent rounded-md group hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              onClick={e => {
                e.preventDefault();
                handleSubmit(e)
              }}
          >
        {isLoading ? (
          <>
            <Loader small={true} width='5' height='5' /> &nbsp; &nbsp;<span>Sending</span>
          </>
        ) : (
          'Send Response'
        )}
          </button>
      </form>}
    </div>
  );
}
