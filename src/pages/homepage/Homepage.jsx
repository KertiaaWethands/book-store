import React from 'react';
import styles from './style.module.css';

export function Homepage() {
  const books = [
    // Contoh data buku (Anda dapat menggantinya dengan data riil)
    {
      image: "/Aset/img/1.jpg",
      title: "Buku 1",
      description: "Deskripsi singkat buku 1"
    },
    {
      image: "/Aset/img/2.jpeg",
      title: "Buku 2",
      description: "Deskripsi singkat buku 2"
    },
    
    {
      image: "/Aset/img/3.jpeg",
      title: "Buku 3",
      description: "Deskripsi singkat buku 3"
    },
    
    {
      image: "/Aset/img/4.jpg",
      title: "Buku ",
      description: "Deskripsi singkat buku 4"
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <img src="/Aset/img/landing.jpeg" alt="Landing Illustration" className={styles.landingImage} />
        <h1>Selamat Datang di Projek Buku!</h1>
        <p>Website ini menyediakan berbagai koleksi buku dan layanan terkait.</p>
      </div>

      <h2 className={styles.collectionHeading}>Koleksi Kami</h2>
      <div className={styles.cards}>
        {books.map((book, index) => (
          <div key={index} className={styles.card}>
            <img src={book.image} alt={book.title} className={styles.cardImage} />
            <h3>{book.title}</h3>
            <p>{book.description}</p>
            <button className={styles.detailButton}>Detail</button>
          </div>
        ))}
      </div>
    </div>
  );
}
