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
        <NavLink to={'/host'} end style={({ isActive }) => (isActive ? activeLink : null)}>
          Dasboard
        </NavLink>
        <NavLink to={'/host/income'} style={({ isActive }) => (isActive ? activeLink : null)}>
          Income
        </NavLink>
        <NavLink to={'/host/vans'} relative="true" style={({ isActive }) => (isActive ? activeLink : null)}>
          Vans
        </NavLink>
        <NavLink to={'/host/reviews'} style={({ isActive }) => (isActive ? activeLink : null)}>
          Reviews
        </NavLink>
      </nav>
      
      <Outlet />
    </>
  );
}

export default HostLayout;
