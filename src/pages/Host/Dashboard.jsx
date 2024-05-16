import React from 'react';
import { Await, Link, defer, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';
import styles from './Dashboard.module.css';

function Dashboard() {
  const loaderData = useLoaderData();

  function renderVanElements(vans) {
    const hostVansEls = vans.map((van) => (
      <main className={styles.van} key={van.id}>
        <div>
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className={styles.info}>
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </div>
        <Link to={`vans/${van.id}`}>View</Link>
      </main>
    ));

    return (
      <div className={styles.vanList}>
        <section>{hostVansEls}</section>
      </div>
    );
  }

  return (
    <section>
      <div className={styles.dashboard}>
        <div className={styles.topText}>
          <h1 className='title'>Welcome!</h1>
          <p>
            Income last <span>30 days</span>
          </p>
        </div>
        <div className={styles.topText}>
          <h2>$2,260</h2>
          <Link to='income'>Details</Link>
        </div>
      </div>
      <div className={styles.reviews}>
        <h2>Review score</h2>
        <p>
          <span className={styles.star}> &#9733; 5.0</span>/5
        </p>
        <Link to='reviews'>Details</Link>
      </div>
      <div className={styles.vans}>
        <div className={styles.top}>
          <h2>Your listed vans</h2>
          <Link to='vans'>View all</Link>
        </div>
        <React.Suspense fallback={<h3>Loading...</h3>}>
          <Await resolve={loaderData.vans}>{renderVanElements}</Await>
        </React.Suspense>
      </div>
    </section>
  );
}

async function loader({ request }) {
  await requireAuth(request);
  return defer({ vans: getHostVans() });
}

export default Dashboard;
export { loader };
