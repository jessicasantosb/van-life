import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useParams } from 'react-router-dom';

function HostVanDetail() {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  const activeLink = {
    fontWeight: 'bold',
    textDecoration: 'underline',
  };

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  return (
    <>
      <Link to='..' relative='path' className='back-button'>
        &larr; <span>Back to all vans</span>
      </Link>
      {van ? (
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
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default HostVanDetail;
