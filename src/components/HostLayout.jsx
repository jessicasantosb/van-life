import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

function HostLayout() {
  const activeLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <>
      <nav className='host-nav'>
        <NavLink to={'.'} end style={({ isActive }) => (isActive ? activeLink : null)}>
          Dasboard
        </NavLink>
        <NavLink to={'income'} style={({ isActive }) => (isActive ? activeLink : null)}>
          Income
        </NavLink>
        <NavLink to={'vans'} style={({ isActive }) => (isActive ? activeLink : null)}>
          Vans
        </NavLink>
        <NavLink to={'reviews'} style={({ isActive }) => (isActive ? activeLink : null)}>
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}

export default HostLayout;
