import React from 'react';
import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';

function HostVanDetail() {
  const van = useLoaderData();

  const activeLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  return (
    <>
      <Link to='..' relative='path' className='back-button'>
        &larr; <span>Back to all vans</span>
      </Link>
      <div className='host-van-detail-layout-container'>
        <div className='host-van-detail'>
          <img src={van.imageUrl} />
          <div className='host-van-detail-info-text'>
            <i className={`van-type van-type-${van.type}`}>{van.type}</i>
            <h3>{van.name}</h3>
            <h4>${van.price}/day</h4>
          </div>
        </div>
        <nav className='host-van-detail-nav'>
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
  return getHostVans(params.id);
}
 
export default HostVanDetail;
export { loader };
