import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function HostVanDetail() {
  const [van, setVan] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [id]);

  return (
    <>
      {van ? (
        <div>
          <img src={van.imageUrl} width={150} />
          <h2>{van.name}</h2>
          <p>{van.price}</p>
          <p>{van.type}</p>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default HostVanDetail;
