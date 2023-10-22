import React from 'react';
import styles from './style.module.css';
import { Outlet,Link } from 'react-router-dom';

export function Layout(props) {
  return (
    <div className={styles.layout}>
      <header className={styles.navbar}>
        <div className={styles.logo}>Projek Buku</div>
        <nav>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/profil" className={styles.navLink}>Profil</Link>
          <Link to="#" className={styles.navLink}>Prosedur Layanan</Link>
          <Link to="#" className={styles.navLink}>Layanan Produk</Link>
          <Link to="/login" className={`${styles.navLink} ${styles.loginButton}`}>
            <i className="fa fa-sign-in" aria-hidden="true"></i> Login
          </Link>
        </nav>
      </header>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}

