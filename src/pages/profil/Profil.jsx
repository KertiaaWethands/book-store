import React from 'react';
import styles from './style.module.css';


export const Profil = () => {
  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <img src="/Aset/img/landing.jpeg" alt="Landing Illustration" className={styles.landingImage} />
        <h1 className={styles.landingTextH}>Profil Kami</h1>
      </div>

      <h1 className={styles.judulProfil}>Siapa Kami ??</h1>
      <div className={styles.profilDetail}>
        
        <div className={styles.textContainer}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. VivamLorem ipsum dolor sit amet, consectetur adipiscing elit. VivamLorem ipsum dolor sit amet, consectetur adipiscing elit. VivamVivamus lacinia odio vitae vestibulum...</p>
        </div>
      </div>
    </div>
  )
}
