import React from 'react';
import {
  Form,
  redirect,
  useActionData,
  useLoaderData,
  useNavigation,
} from 'react-router-dom';
import { loginUser } from '../api';
import styles from './Login.module.css';

function Login() {
  const message = useLoaderData();
  const error = useActionData();
  const { state } = useNavigation();
  const isSubmitting = state === 'submitting';

  return (
    <section className={styles.login}>
      <div className={styles.container}>
        <h1 className='title'>Sign in to your account</h1>
        {message && <h4 className='red'>{message}</h4>}
        {error && <h4 className='red'>{error}</h4>}

        <Form method='post' className={styles.form} replace>
          <input name='email' type='email' placeholder='Email address' />
          <input name='password' type='password' placeholder='Password' />
          <button disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login in'}
          </button>
        </Form>
      </div>
    </section>
  );
}

function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');

  const pathname =
    new URL(request.url).searchParams.get('redirectTo') || '/host';

  try {
    await loginUser({ email, password });
    localStorage.setItem('loggedin', true);
    const response = redirect(pathname);
    response.body = true;
    return response;
  } catch (error) {
    return error.message;
  }
}

export { action, loader };
export default Login;
