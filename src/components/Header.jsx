import React from 'react';
import { CiUser } from 'react-icons/ci';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const activeLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  const linkStyle = ({ isActive }) => (isActive ? activeLink : null);

  function fakeLogOut() {
    localStorage.removeItem('loggedin');
  }

  return (
    <header>
      <Link className={styles.logo} to={'/'}>
        VanLife
      </Link>

      <nav className={styles.nav}>
        <NavLink to={'about'} style={linkStyle}>
          About
        </NavLink>
        <NavLink to={'vans'} style={linkStyle}>
          Vans
        </NavLink>
        <NavLink to={'host'} style={linkStyle}>
          Host
        </NavLink>
        <Link to='login' className={styles.loginLink}>
          <CiUser className={styles.loginIcon} />
        </Link>
        <button onClick={fakeLogOut}>X</button>
      </nav>
    </header>
  );
}

export default Header;
