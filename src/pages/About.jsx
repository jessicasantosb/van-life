import React from 'react';
import { Link } from 'react-router-dom';
import hero from '../assets/about-hero.png';
import styles from './About.module.css';

function About() {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <h1 className='title'>Why are we?</h1>
      </div>

      <div className={styles.content}>
        <h1 className='title'>Embrace the space</h1>
        <p>Don’t squeeze in a sedan when you could relax in a van.</p>
        <div className={styles.contentText}>
          <img src={hero} alt='about hero' />
          <div>
            <p>
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
            </p>
            <p>
              Our team is full of vanlife enthusiasts who know firsthand the
              magic of touring the world on 4 wheels.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.cta}>
        <h2 className='title'>
          Your destination is waiting.
          <br />
          Your van is ready.
        </h2>
        <Link className={styles.ctaButton} to='/vans'>
          Explore our vans
        </Link>
      </div>
    </section>
  );
}

export default About;
