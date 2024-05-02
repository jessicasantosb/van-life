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

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsType = searchParams.get('type');
  const vansPromise = useLoaderData();
  const isLoading = useNavigation().state === 'loading';
  const loadingStyle = { opacity: '0.5' };

  return (
    <div className='van-list-container' >
      <h1>Explore our van options</h1>
  
      <Suspense fallback={<h2>loading...</h2>}>
        <Await resolve={vansPromise.vans}>
          {(vans) => {
            const displayedVans = paramsType
              ? vans.filter(({ type }) => type === paramsType)
              : vans;
  
            return (
              <>
                <div className='van-list-filter-buttons'>
                  <button
                    onClick={() => setSearchParams({ type: 'simple' })}
                    className={`van-type simple ${
                      paramsType === 'simple' && 'selected'
                    }`}
                  >
                    simple
                  </button>
                  <button
                    onClick={() => setSearchParams({ type: 'rugged' })}
                    className={`van-type rugged ${
                      paramsType === 'rugged' && 'selected'
                    }`}
                  >
                    rugged
                  </button>
                  <button
                    onClick={() => setSearchParams({ type: 'luxury' })}
                    className={`van-type luxury ${
                      paramsType === 'luxury' && 'selected'
                    }`}
                  >
                    luxury
                  </button>
                  {paramsType && (
                    <button
                      onClick={() => setSearchParams({})}
                      className='van-type clear-filters'
                    >
                      clear
                    </button>
                  )}
                </div>

                <div className='van-list'>
                  {displayedVans.map(({ id, name, imageUrl, price, type }) => (
                    <div
                      key={id}
                      className='van-tile'
                      style={isLoading ? loadingStyle : {}}
                    >
                      <Link
                        to={id}
                        state={{
                          search: searchParams.toString(),
                          type: paramsType,
                        }}
                      >
                        <img src={imageUrl} />
                        <div className='van-info'>
                          <p>{name}</p>
                          <p>
                            ${price}
                            <span>/day</span>
                          </p>
                        </div>
                        <i className={`van-type ${type} selected`}>{type}</i>
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
