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
import styles from './HostVans.module.css'

function HostVans() {
  const vansPromise = useLoaderData();
  const isLoading = useNavigation().state === 'loading';
  const loadingStyle = { opacity: '0.5' };

  return (
    <section className={styles.hostVans}>
      <h1 className='title'>Your Listed Vans</h1>
      <div className={styles.list}>
        <section>
          <Suspense fallback={<h4>loading...</h4>}>
            <Await resolve={vansPromise.hostvans}>
              {(vans) => {
                return vans.map((van) => (
                  <Link 
                    to={van.id}
                    key={van.id}
                    className={styles.wrapper}
                    style={isLoading ? loadingStyle : {}}
                  >
                    <div className={styles.van}>
                      <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
                      <div className={styles.info}>
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
