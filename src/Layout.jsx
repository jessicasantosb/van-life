import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <section>
      <header>
        <Link className='site-logo' to={'/'}>
          #VanLife
        </Link>

        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={'/about'}>About</Link>
          <Link to={'/vans'}>Vans</Link>
        </nav>
      </header>

      <Outlet />
    </section>
  );
}

export default Layout;
