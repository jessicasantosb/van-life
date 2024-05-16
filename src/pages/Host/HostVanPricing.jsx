import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './HostVanPricing.module.css';

function HostVanPricing() {
  const { price } = useOutletContext();

  return (
    <div>
      <h3 className={styles.pricing}>
        ${price}
        <span>/day</span>
      </h3>
    </div>
  );
}

export default HostVanPricing;
