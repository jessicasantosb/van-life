import React, { Suspense } from 'react';
import {
  Await,
  Link,
  defer,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';

function HostVans() {
  const vansPromise = useLoaderData();
  const isLoading = useNavigation().state === 'loading';
  const loadingStyle = { opacity: '0.5' };

  return (
    <section>
      <h1 className='host-vans-title'>Your listed vans</h1>
      <div className='host-vans-list'>
        <section>
          <Suspense fallback={<h4>loading...</h4>}>
            <Await resolve={vansPromise.hostvans}>
              {(vans) => {
                return vans.map((van) => (
                  <Link
                    to={van.id}
                    key={van.id}
                    className='host-van-link-wrapper'
                    style={isLoading ? loadingStyle : {}}
                  >
                    <div className='host-van-single'>
                      <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                      <div className='host-van-info'>
                        <h3>{van.name}</h3>
                        <p>${van.price}/day</p>
                      </div>
                    </div>
                  </Link>
                ));
              }}
            </Await>
          </Suspense>
        </section>
      </div>
    </section>
  );
}

async function loader({ request }) {
  await requireAuth(request);
  return defer({ hostvans: getHostVans() });
}

export default HostVans;
export { loader };
