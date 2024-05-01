import React, { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { loginUser } from '../api';

function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: '', password: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  const message = useLoaderData();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    setError(null);
    loginUser(loginFormData)
      .then((data) => {
        navigate('/host', { replace: true });
      })
      .catch((err) => setError(err))
      .finally(() => setStatus('idle'));
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className='login-container'>
      <h1>Sign in to your account</h1>
      {message && <h4 className='red'>{message}</h4>}
      {error && <h4 className='red'>{error.message}</h4>}
      <form onSubmit={handleSubmit} className='login-form'>
        <input
          name='email'
          onChange={handleChange}
          type='email'
          placeholder='Email address'
          value={loginFormData.email}
        />
        <input
          name='password'
          onChange={handleChange}
          type='password'
          placeholder='Password'
          value={loginFormData.password}
        />
        <button disabled={status === 'submitting'}>{status === 'submitting' ? 'Logging in...' : 'Login in'}</button>
      </form>
    </div>
  );
}

function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export { loader };
export default Login;
