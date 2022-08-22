import React, { useEffect } from 'react';
import FormAction from './components/FormAction';
import Header from './components/Header';
import Input from './components/Input';
import { toast } from 'react-toastify';

import axios from '../../api/axios';
import { REGISTER_URL } from '../../constants';
import { useNavigate } from 'react-router';
import { Helmet } from 'react-helmet';

export default function SignupPage() {
  const navigate = useNavigate();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPassword, setConfirmPassword] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const [isPasswordMatchError, setIsPasswordMatchError] = React.useState(false);
  const [passwordNotStrongEnough, setPasswordNotStrongEnough] =
    React.useState(false);

  useEffect(() => {
    if (password.length && confirmPassword !== password) {
      setIsPasswordMatchError(true);
    } else {
      setIsPasswordMatchError(false);
    }
  }, [confirmPassword]);
  useEffect(() => {
    if (!password.length) {
      setIsPasswordMatchError(false);
      return;
    }
    if (
      !password.length ||
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)
    ) {
      setPasswordNotStrongEnough(false);
      setError(null);
      return;
    }
    setPasswordNotStrongEnough(true);
    setError(
      'Password must be at least 6 characters long and contain at least one number and one special character'
    );
  }, [password]);

  const CreateUser = async () => {
    if (isPasswordMatchError) {
      setError('Passwords do not match');
      return;
    }
    setIsLoading(true);
    try {
      const SignupState = {
        username,
        password,
      };

      const response = await axios.post(
        `/${REGISTER_URL}`,
        JSON.stringify(SignupState),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      navigate('../login' , { replace: true });
      toast.success('Account Created Successfully! Please Login.', {
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
        setError('Server error', error);
      } else if (error?.response?.status === 400) {
        setError('Missing username or password');
      } else if (error?.response?.status === 409) {
        setError('Username already exists');
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
      <title>Singup</title>
      </Helmet>
      <Header
        heading='Signup to create an account'
        paragraph='Already have an account? '
        linkName='Login'
        linkUrl='../login'
      />
      <p className='text-center text-red-600'>{error || ''}</p>
      <form className='mt-8 space-y-6'>
        <div
        >
          <Input
            handleChange={setUsername}
            id='username'
            name='usermame'
            type='text'
            value={username}
            labelText='Username'
            labelFor='username'
            isRequired={true}
            autoComplete='false'
            placeholder='Enter your Username'
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
            customClass={
              passwordNotStrongEnough
                ? 'border border-red-700 focus:border-red-500'
                : 'border border-gray-300'
            }
            isError={passwordNotStrongEnough}
            errorMessage={'Password Validation Error'}
          />
          <Input
            handleChange={setConfirmPassword}
            id='confirmPassword'
            name='confirmPassword'
            type='confirmPassword'
            value={confirmPassword}
            labelText='Confirm Password'
            labelFor='confirmPassword'
            autoComplete={'false'}
            isRequired={true}
            placeholder='Renter your password to confirm'
            customClass={
              isPasswordMatchError
                ? 'border border-red-700 focus:border-red-500'
                : 'border border-gray-300'
            }
            isError={isPasswordMatchError}
            errorMessage='Passwords do not match'
          />
        </div>
        <FormAction
          handleSubmit={CreateUser}
          isLoading={isLoading}
          text='Create Account'
        />
      </form>
    </>
  );
}
