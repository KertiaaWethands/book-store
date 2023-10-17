import React, { useState } from 'react';
import Styles from './style.module.css';

export function Registrasi() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    setLoading(true);

    // Anda dapat menambahkan kode untuk mengirim data ke server di sini.
    // Setelah mendapatkan respons dari server, atur state loading dan errorMessage sesuai kebutuhan.

    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        <button type="submit" disabled={loading}>
          Register
        </button>
      </form>
      {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
    </div>
  );
}