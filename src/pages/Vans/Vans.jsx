import React, { Suspense } from 'react';
import {
  Await,
  Link,
  defer,
  useLoaderData,
  useNavigation,
  useSearchParams,
} from 'react-router-dom';
import { getVans } from '../../api';
import styles from './Vans.module.css';

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsType = searchParams.get('type');
  const vansPromise = useLoaderData();
  const isLoading = useNavigation().state === 'loading';
  const loadingStyle = { opacity: '0.5' };

  return (
    <div className={styles.container}>
      <h1 className='title'>Explore our van options</h1>

      <Suspense fallback={<h2>loading...</h2>}>
        <Await resolve={vansPromise.vans}>
          {(vans) => {
            const displayedVans = paramsType
              ? vans.filter(({ type }) => type === paramsType)
              : vans;

            return (
              <>
                <div className={styles.filterButtons}>
                  <button
                    onClick={() => setSearchParams({ type: 'simple' })}
                    className={`${styles.vanType} ${
                      paramsType === 'simple' && 'selected'
                    }`}
                  >
                    simple
                  </button>
                  <button
                    onClick={() => setSearchParams({ type: 'rugged' })}
                    className={`${styles.vanType} ${
                      paramsType === 'rugged' && 'selected'
                    }`}
                  >
                    rugged
                  </button>
                  <button
                    onClick={() => setSearchParams({ type: 'luxury' })}
                    className={`${styles.vanType} ${
                      paramsType === 'luxury' && 'selected'
                    }`}
                  >
                    luxury
                  </button>
                  {paramsType && (
                    <button
                      onClick={() => setSearchParams({})}
                      className={`${styles.vanType} ${styles.clear} `}
                    >
                      clear filters
                    </button>
                  )}
                </div>

                <div className={styles.vans}>
                  {displayedVans.map(({ id, name, imageUrl, price, type }) => (
                    <div
                      key={id}
                      className={styles.tile}
                      style={isLoading ? loadingStyle : {}}
                    >
                      <Link
                        to={id}
                        state={{
                          search: searchParams.toString(),
                          type: paramsType,
                        }}
                      >
                        <img src={imageUrl} alt={name} />
                        <div className={styles.info}>
                          <p>{name}</p>
                          <p>
                            ${price}
                            <span>/day</span>
                          </p>
                        </div>
                        <i className={`${styles.vanTypeTag} ${styles[type]}`}>
                          {type}
                        </i>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
            );
          }}
        </Await>
      </Suspense>
    </div>
  );
}

async function loader() {
  return defer({ vans: getVans() });
}

export default Vans;
export { loader };
