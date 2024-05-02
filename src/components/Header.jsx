import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import avatar from '../assets/avatar-icon.png';

function Header() {
  const activeLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  function fakeLogOut() {
    localStorage.removeItem('loggedin');
  }

  return (
    <header>
      <Link className='site-logo' to={'/'}>
        #VanLife
      </Link>

      <nav>
        <NavLink to={'about'} style={({ isActive }) => (isActive ? activeLink : null)}>
          About
        </NavLink>
        <NavLink to={'vans'} style={({ isActive }) => (isActive ? activeLink : null)}>
          Vans
        </NavLink>
        <NavLink to={'host'} style={({ isActive }) => (isActive ? activeLink : null)}>
          Host
        </NavLink>
        <Link to='login' className='login-link'>
          <img src={avatar} className='login-icon' />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}

export default Header;
