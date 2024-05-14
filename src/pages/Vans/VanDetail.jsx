import React, { Suspense } from 'react';
import {
  Await,
  Link,
  defer,
  useLoaderData,
  useLocation,
} from 'react-router-dom';
import { getVan } from '../../api';
import styles from './VanDetail.module.css'

function VanDetail() {
  const vanPromise = useLoaderData();

  const { state } = useLocation();
  const stateSearch = state?.search || '';
  const stateType = state?.type || 'all';

  return (
    <section className={styles.container}>
      <Link to={`..?${stateSearch}`} relative='path' className={styles.backButton}>
        &larr; <span>Back to {stateType} vans</span>
      </Link>
      <div className={styles.content}>
        <Suspense fallback={<h2>loading...</h2>}>
          <Await resolve={vanPromise.van}>
            {({ imageUrl, type, name, price, description }) => {
              return (
                <>
                  <img src={imageUrl} />
                  <i className={`${styles.vanType} ${styles[type]}`}>{type}</i>
                  <h2 className='title'>{name}</h2>
                  <p className={styles.price}>
                    <span>${price}</span>/day
                  </p>
                  <p className={styles.description}>{description}</p>
                  <button className={styles.link}>Rent this van</button>
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
