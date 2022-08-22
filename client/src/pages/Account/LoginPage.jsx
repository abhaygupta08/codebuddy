import React, { useContext, useEffect } from 'react';
import FormAction from './components/FormAction';
import Header from './components/Header';
import Input from './components/Input';
import axios from '../../api/axios';
import { LOGIN_URL } from '../../constants';
import { toast } from 'react-toastify';
import {  useNavigate } from 'react-router';
import useSearchParams  from '../../hooks/useSearchParams';
import AuthContext from '../../context/AuthProvider';
import { Helmet } from 'react-helmet';

export default function LoginPage() {
  const searchParams = useSearchParams();
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);
  const [username, setUsername] = React.useState(null);
  const [password, setPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [isUsernameError, setIsUsernameError] = React.useState(false);
  useEffect(() => {
    if (username === null || (username && username.length > 0)) {
      setIsUsernameError(false);
      return;
    }
    setIsUsernameError(true);
  }, [username]);

  const AuthenticateUser = async () => {
    if (isUsernameError) return;
    setIsLoading(true);
    setError(null);

    try {
      const LoginState = {
        username,
        password,
      };
      const response = await axios.post(
        `/${LOGIN_URL}`,
        JSON.stringify(LoginState),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setAuth({
        username,
        password,
        accessToken: response?.data?.accessToken,
        roles: response?.data.roles,
      });
      
      navigate(searchParams.next || '/problemset' , { replace: true });
      toast.success('Logged in Successfully!', {
        position: 'bottom-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    } catch (error) {
      if (!error.response) {
        setError('Server error');
      } else if (error?.response?.status === 400) {
        setError('Missing username or password');
      } else if (error?.response?.status === 401) {
        setError('Invalid username or password');
      } else {
        setError('Server error');
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
    <Helmet>
      <title>Login</title>
      </Helmet>
      <Header
        heading='Login to your account'
        paragraph="Don't have an account yet? "
        linkName='Signup'
        linkUrl='../signup'
      />
      <p className='text-center text-red-600'>{error || ''}</p>
      <form className='mt-8 space-y-6'>
        <div className='-space-y-px'>
          <Input
            handleChange={setUsername}
            id='username'
            name='username'
            type='username'
            value={username || ''}
            labelText='Username'
            labelFor='username'
            isRequired={true}
            autoComplete='username'
            placeholder='Enter your username'
            customClass={
              isUsernameError
                ? 'border border-red-700 focus:border-red-500'
                : 'border border-gray-300'
            }
            isError={isUsernameError}
            errorMessage='Username Required'
          />
          <Input
            handleChange={setPassword}
            id='password'
            name='password'
            type='password'
            value={password}
            labelText='Password'
            labelFor='password'
            autoComplete='password'
            isRequired={true}
            placeholder='Enter your password'
          />
        </div>
        <div className='flex items-center justify-between '>
          <div className='flex items-center'>
            <input
              id='remember-me'
              name='remember-me'
              type='checkbox'
              defaultChecked
              className='w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500'
            />
            <label
              htmlFor='remember-me'
              className='block ml-2 text-sm text-gray-900'
            >
              Remember me
            </label>
          </div>

          {/* <div className='text-sm'>
            <a
              href='#'
              className='font-medium text-purple-600 hover:text-purple-500'
            >
              Forgot your password?
            </a>
          </div> */}
        </div>
        <FormAction
          handleSubmit={AuthenticateUser}
          isLoading={isLoading}
          text='Login'
        />
      </form>
    </>
  );
}
