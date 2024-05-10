import React, { Suspense } from 'react';
import {
  Await,
  Link,
  defer,
  useLoaderData,
  useLocation,
} from 'react-router-dom';
import { getVan } from '../../api';

function VanDetail() {
  const vanPromise = useLoaderData();

  const { state } = useLocation();
  const stateSearch = state?.search || '';
  const stateType = state?.type || 'all';

  return (
    <section className='van-detail-container'>
      <Link to={`..?${stateSearch}`} relative='path' className='back-button'>
        &larr; <span>Back to {stateType} vans</span>
      </Link>
      <div className='van-detail'>
        <Suspense fallback={<h2>loading...</h2>}>
          <Await resolve={vanPromise.van}>
            {({ imageUrl, type, name, price, description }) => {
              return (
                <>
                  <img src={imageUrl} />
                  <i className={`van-type ${type} selected`}>{type}</i>
                  <h2>{name}</h2>
                  <p className='van-price'>
                    <span>${price}</span>/day
                  </p>
                  <p>{description}</p>
                  <button className='link-button'>Rent this van</button>
                </>
              );
            }}
          </Await>
        </Suspense>
      </div>
    </section>
  );
}

function loader({ params }) {
  return defer({ van: getVan(params.id) });
}

export default VanDetail;
export { loader };
