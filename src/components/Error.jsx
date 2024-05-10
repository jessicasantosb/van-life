import React from 'react';
import { useRouteError } from 'react-router-dom';
import styles from './Error.module.css';

function Error() {
  const error = useRouteError();

  return (
    <section className={styles.error}>
      <div>
        <h1 className={styles.title}>An error occurred! {error.message}</h1>
        <pre>
          {error.status} - {error.statusText}
        </pre>
      </div>
    </section>
  );
}

export default Error;
