import axios from '../api/axios';
import { toast } from 'react-toastify';
import { LOGOUT_URL } from '../constants';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';
import { useContext } from 'react';
import AuthContext from '../context/AuthProvider';

export default function Logout() {
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  useEffect(() => {
    if (auth) {
      try {
        axios.get(LOGOUT_URL, { withCredentials: true });
        toast.success('Logged Out Successfully', {
          position: toast.POSITION.BOTTOM_RIGHT,
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        toast.error(error.message, {
          position: 'bottom-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setAuth(null);
    }
    navigate('/', { replace: true });
  }, [navigate]);

  return null;
}
