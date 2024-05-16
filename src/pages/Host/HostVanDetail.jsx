import React from 'react';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getVan } from '../../api';
import { requireAuth } from '../../utils';
import styles from './HostVanDetail.module.css';

function HostVanDetail() {
  const van = useLoaderData();

  const activeLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <>
      <Link to='..' relative='path' className={styles.backButton}>
        &larr; <span>Back to all vans</span>
      </Link>
      <div className={styles.container}>
        <div className={styles.details}>
          <img src={van.imageUrl} />
          <div>
            <i className={`${styles.vanType} ${styles[van.type]}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
        <nav className={styles.nav}>
          <NavLink to={'.'} end style={({ isActive }) => (isActive ? activeLink : null)}>
            Info
          </NavLink>
          <NavLink to={'photos'} style={({ isActive }) => (isActive ? activeLink : null)}>
            Photos
          </NavLink>
          <NavLink to={'pricing'} style={({ isActive }) => (isActive ? activeLink : null)}>
            Pricing
          </NavLink>
        </nav>

        <Outlet context={van} />
      </div>
    </>
  );
}

async function loader({ params, request }) {
  await requireAuth(request);
  return getVan(params.id);
}
 
export default HostVanDetail;
export { loader };
