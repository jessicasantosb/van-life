import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

function VanDetail() {
  const [van, setVan] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const search = location.state?.search || '';
  const type = location.state?.type || 'all';

  useEffect(() => {
    fetch(`/api/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  return (
    <section className='van-detail-container'>
      <Link to={`..?${search}`} relative='path' className='back-button'>
        &larr; <span>Back to {type && `${type} vans`}</span>
      </Link>
      {van ? (
        <div className='van-detail'>
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className='van-price'>
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className='link-button'>Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
}

export default VanDetail;
