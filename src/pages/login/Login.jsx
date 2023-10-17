import React, { useState } from 'react';
import Styles from './style.module.css'

export function Login() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data ke server atau lakukan validasi lebih lanjut di sini.
    console.log(credentials);
  };

  return (
    <div className={Styles.loginContainer}>
      <div className={Styles.loginHeader}>
        <h2>Welcome Back</h2>
        <p>Please login to continue</p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={credentials.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="password"
          name="password"
          value={credentials.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

