import React from 'react';
import { useOutletContext } from 'react-router-dom';
import styles from './HostVanPhotos.module.css'

function HostVanPhotos() {
  const { imageUrl } = useOutletContext();

  return (
    <div className={styles.photos}>
      <img src={imageUrl} />
    </div>
  );
}

export default HostVanPhotos;
