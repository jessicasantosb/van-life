import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Login() {
  const [loginFormData, setLoginFormData] = React.useState({ email: '', password: '' });
  const message = useLoaderData();

  function handleSubmit(e) {
    e.preventDefault();
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
        <button>Log in</button>
      </form>
    </div>
  );
}

function loader({ request }) {
  return new URL(request.url).searchParams.get('message');
}

export { loader };
export default Login;
