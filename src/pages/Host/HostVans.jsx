import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';

function HostVans() {
  const vans = useLoaderData();

  return (
    <section>
      <h1 className='host-vans-title'>Your listed vans</h1>
      <div className='host-vans-list'>
        <section>
          {vans.map((van) => (
            <Link to={van.id} key={van.id} className='host-van-link-wrapper'>
              <div className='host-van-single' key={van.id}>
                <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                <div className='host-van-info'>
                  <h3>{van.name}</h3>
                  <p>${van.price}/day</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </section>
  );
}

async function loader({request}) {
  await requireAuth(request);
  return getHostVans();
}

export default HostVans;
export { loader };
