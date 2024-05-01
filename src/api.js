export async function getVans(id) {
  const url = id ? `/api/vans/${id}` : '/api/vans';
  const response = await fetch(url);
  if (!response.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.vans;
}

export async function getHostVans(id) {
  const url = id ? `/api/host/vans/${id}` : '/api/host/vans';
  const response = await fetch(url);
  if (!response.ok) {
    throw {
      message: 'Failed to fetch vans',
      statusText: response.statusText,
      status: response.status,
    };
  }
  const data = await response.json();
  return data.vans;
}

export async function loginUser(creds) {
  const response = await fetch('/api/login', { method: 'post', body: JSON.stringify(creds) });
  const data = await response.json();
  
  if (!response.ok) {
    throw {
      message: data.message,
      statusText: response.statusText,
      status: response.status,
    };
  }

  return data;
}
