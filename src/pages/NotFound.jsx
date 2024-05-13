import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFound.module.css'

function NotFound() {
  return (
    <section className={styles.container}>
      <h1 className='title'>Not Found</h1>
      <p>sorry, the page you were looking for was not found.</p>
      <Link to='/' className={styles.button}>
        Return to Home
      </Link>
    </section>
  );
}

export default NotFound;
