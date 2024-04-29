import React from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams();

  const vans = useLoaderData();

  const paramsType = searchParams.get('type');

  const displayedVans = paramsType ? vans.filter(({ type }) => type === paramsType) : vans;

  return (
    <div className='van-list-container'>
      <h1>Explore our van options</h1>
      <div className='van-list-filter-buttons'>
        <button
          onClick={() => setSearchParams({ type: 'simple' })}
          className={`van-type simple ${paramsType === 'simple' && 'selected'}`}
        >
          simple
        </button>
        <button
          onClick={() => setSearchParams({ type: 'rugged' })}
          className={`van-type rugged ${paramsType === 'rugged' && 'selected'}`}
        >
          rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: 'luxury' })}
          className={`van-type luxury ${paramsType === 'luxury' && 'selected'}`}
        >
          luxury
        </button>
        {paramsType && (
          <button onClick={() => setSearchParams({})} className='van-type clear-filters'>
            clear
          </button>
        )}
      </div>

      <div className='van-list'>
        {displayedVans.map(({ id, name, imageUrl, price, type }) => (
          <div key={id} className='van-tile'>
            <Link to={id} state={{ search: searchParams.toString(), type: paramsType }}>
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
    </div>
  );
}

function loader() {
  return getVans();
}

export default Vans;
export { loader };
