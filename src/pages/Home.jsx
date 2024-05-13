import { Suspense } from 'react';
import { Await, Link, defer, useLoaderData } from 'react-router-dom';
import { getVans } from '../api';
import image from '../assets/about-hero.png';
import styles from './Home.module.css';

function Home() {
  const vansPromise = useLoaderData();

  return (
    <section>
      <div className={styles.container}>
        <h1 className='title'>
          You got the travel plans, we got the travel vans.
        </h1>
        <p className={styles.subtitle}>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to='vans' className={styles.link}>
          Find your van
        </Link>
      </div>

      <Suspense fallback={<p>loading...</p>}>
        <Await resolve={vansPromise.vans}>
          {(vans) => {
            const cheaperVans = vans.filter(({ price }) => price <= 80);
            return (
              <div className={styles.vansContainer}>
                <h1 className='title'>Explore Our Vans</h1>
                <p>Your destination is waiting.</p>
                <div className={styles.vans}>
                  {cheaperVans.map(({ id, name, imageUrl }) => {
                    return (
                      <div key={id} className={styles.van}>
                        <img src={imageUrl} alt={name} />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          }}
        </Await>
      </Suspense>

      <div className={styles.about}>
        <h1 className='title'>What is Van Life?</h1>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className={styles.aboutContent}>
          <img src={image} alt='about image' />
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
        </div>
      </div>
    </section>
  );
}

async function loader() {
  return defer({ vans: getVans() });
}

export default Home;
export { loader };
