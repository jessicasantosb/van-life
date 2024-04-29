import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getVans } from '../../api';

function Vans() {
  const [vans, setVans] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const paramsType = searchParams.get('type');

  const displayedVans = paramsType ? vans.filter(({ type }) => type === paramsType) : vans;

  React.useEffect(() => {
    const loadVans = async () => {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    loadVans();
  }, []);

  if (loading) return <h1 aria-live="polite">Loading...</h1>;
  if (error) return <h1 aria-live="assertive">There was a error: {error.message}</h1>

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

export default Vans;
