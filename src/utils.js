import { redirect } from 'react-router-dom';

export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname
  const isLoggedIn = Boolean(localStorage.getItem("loggedin")) || false;
  if (!isLoggedIn) {
    const response = redirect(`/login?message=You must log in first&redirectTo=${pathname}`);
    response.body = null;
    throw response;
  }

  return null;
}
