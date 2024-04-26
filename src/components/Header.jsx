import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const activeLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <header>
      <Link className='site-logo' to={'/'}>
        #VanLife
      </Link>

      <nav>
        <NavLink to={'/about'} style={({ isActive }) => (isActive ? activeLink : null)}>
          About
        </NavLink>
        <NavLink to={'/vans'} style={({ isActive }) => (isActive ? activeLink : null)}>
          Vans
        </NavLink>
        <NavLink to={'/host'} style={({ isActive }) => (isActive ? activeLink : null)}>
          Host
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
