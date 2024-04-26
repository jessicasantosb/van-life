import React from 'react';
import { useOutletContext } from 'react-router-dom';

function HostVanPhotos() {
  const { imageUrl } = useOutletContext();

  return (
    <div>
      <img src={imageUrl} className='host-van-detail-image' />
    </div>
  );
}

export default HostVanPhotos;
