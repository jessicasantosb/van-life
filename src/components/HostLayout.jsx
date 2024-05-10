import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styles from './HostLayout.module.css';

function HostLayout() {
  const activeLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  const linkStyle = ({ isActive }) => (isActive ? activeLink : null);

  return (
    <>
      <nav className={styles.nav}>
        <NavLink to={'.'} end style={linkStyle}>
          Dasboard
        </NavLink>
        <NavLink to={'income'} style={linkStyle}>
          Income
        </NavLink>
        <NavLink to={'vans'} style={linkStyle}>
          Vans
        </NavLink>
        <NavLink to={'reviews'} style={linkStyle}>
          Reviews
        </NavLink>
      </nav>

      <Outlet />
    </>
  );
}

export default HostLayout;
