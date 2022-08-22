import React, { useEffect, useContext } from 'react';
import {
  // useNavigate,
  NavLink,
} from 'react-router-dom';
import codeBuddyBanner from '../../assets/codeBuddyBanner.svg';
import UserImg from '../../assets/UserImg.svg';
import axios from '../../api/axios';
import AuthContext from '../../context/AuthProvider';
import { ROLES } from '../../constants';
export default function Navbar() {
  const { auth } = useContext(AuthContext);
  const DefaultRoutes = [
    {
      navDisplay: 'IDE',
      path: '/ide',
      customClass: 'link-hover',
    },
    {
      navDisplay: 'Contest Watcher',
      path: '/contest-watcher',
      customClass: 'link-hover',
    },
    {
      navDisplay: 'Code Room',
      path: '/code-room',
      customClass: 'link-hover',
    },
    {
      navDisplay: (
        <img src={UserImg} alt='UserImg' width={'20px'} height={'20px'} />
      ),
      path: '/account',
    },
  ];

  const UserRoutes = [
    {
      navDisplay: 'Problemset',
      path: '/problemset',
      customClass: 'link-hover',
    },
    {
      navDisplay: 'All Snippets',
      path: '/snippets',
      customClass: 'link-hover',
    },
    {
      navDisplay: 'IDE',
      path: '/ide',
      customClass: 'link-hover',
    },
    {
      navDisplay: 'Contest Watcher',
      path: '/contest-watcher',
      customClass: 'link-hover',
    },
    {
      navDisplay: 'Code Room',
      path: '/code-room',
      customClass: 'link-hover',
    },
    {
      navDisplay: (
        <div className='flex gap-0.5'>
          <img src={UserImg} alt='UserImg' width={'20px'} height={'20px'} />{' '}
          {auth?.username}
        </div>
      ),
      path: '/user',
    },
    {
      navDisplay: 'Logout',
      path: '/logout',
    },
  ];

  const AdminRoutes = [
    {
      navDisplay: 'All Snippets',
      path: '/snippets',
      customClass: 'link-hover',
    },
    {
      navDisplay: 'IDE',
      path: '/ide',
      customClass: 'link-hover',
    },
    {
      navDisplay: 'Contest Watcher',
      path: '/contest-watcher',
      customClass: 'link-hover',
    },
    {
      navDisplay: 'Code Room',
      path: '/code-room',
      customClass: 'link-hover',
    },
    {
      navDisplay: (
        <div className='flex gap-0.5'>
          <img src={UserImg} alt='UserImg' width={'20px'} height={'20px'} />{' '}
          {auth?.username}
        </div>
      ),
      path: '/user',
    },
    {
      navDisplay: 'Logout',
      path: '/logout',
    },
  ];

  const [Routes, setRoutes] = React.useState(DefaultRoutes);

  useEffect(() => {
    // console.log(auth?.roles);
    if (auth?.roles?.find((role) => [ROLES.Admin]?.includes(role))) {
      console.log('Admin');
      setRoutes(AdminRoutes);
      return;
    } else if (auth?.roles?.find((role) => [ROLES.User]?.includes(role))) {
      console.log('User');
      setRoutes(UserRoutes);
      return;
    } else {
      setRoutes(DefaultRoutes);
      console.log('Visitor');
    }
  }, [auth]);

  return (
    <nav className='sticky top-0 z-10 flex items-center justify-between py-3 bg-white shadow-sm md:px-28'>
      <NavLink to='/'>
        <button className='flex items-center gap-2'>
          <img src={codeBuddyBanner} alt='codeBuddyBanner' />
          {/* <img className='cursor-pointer' width='60px' src={codeBuddy} alt='Logo' /> */}
        </button>
      </NavLink>
      <ul className='flex items-center gap-8 text-sm text-dark'>
        {Routes.map((route, index) => (
          <li key={index} className={`cursor-pointer ${route.customClass}`}>
            <NavLink to={route.path}>{route.navDisplay}</NavLink>
          </li>
        ))}
        {/* 
        <li>
          <NavLink to='/secret'>secret</NavLink>
        </li>
        <li>
          <NavLink to='/admin'>Admin Login</NavLink>
        </li>
*/}
      </ul>
    </nav>
  );
}
