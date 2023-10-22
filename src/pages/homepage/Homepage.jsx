import React from 'react';
import styles from './style.module.css';

export const Homepage = () => {
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
  const services = [
    { title: "Penerbitan Buku", description: "Kami menyediakan berbagai paket untuk Penerbitan Buku di kami yang bisa dipilih sesukanya" },
    { title: "Penerbitan Jurnal", description: "Di samping buku kami juga menyediakan Jurnal untuk naskah-naskah akademisi." },
    { title: "Pengurusan HAKI", description: "Kami Juga memberikan layanan berupa pengurusan Hak Kekayaan Intelektual (HAKI)" },
    { title: "Pelatihan/ Workshop", description: "Kami juga memberikan Layanan pelatihan/workshop serta subjek dampingannya." },
    { title: "Translite Bahasa Inggris", description: "Kami menyediakan layanan translit Bahasa inggris dengan kualitas terpercaya" },
    { title: "Proseding Seminar", description: "Layanan pendampingan kampus dalam menyelenggarakan seminar nasional ataupun internasional dengan output publikasi proseding ber ISBN" },
];

const articles = [
  {
      image: "/Aset/img/a.jpeg",
      title: "Judul Artikel 1",
      summary: "Ringkasan singkat dari artikel 1."
  },
  {
      image: "/Aset/img/b.jpeg",
      title: "Judul Artikel 2",
      summary: "Ringkasan singkat dari artikel 2."
  },
  {
      image: "/Aset/img/c.jpeg",
      title: "Judul Artikel 2",
      summary: "Ringkasan singkat dari artikel 2."
  },
  {
    image: "/Aset/img/a.jpeg",
    title: "Judul Artikel 2",
    summary: "Ringkasan singkat dari artikel 2."
  },
];



  return (
    <div className={styles.container}>
      <div className={styles.landing}>
        <img src="/Aset/img/landing.jpeg" alt="Landing Illustration" className={styles.landingImage} />
        <h1 className={styles.landingTextH}>Selamat Datang di Projek Buku!</h1>
        <p className={styles.landingTextP}>Website ini menyediakan berbagai koleksi buku dan layanan terkait.</p>
      </div>

      <div className={styles.collections}>
        <h2 className={styles.collectionHeading}>Koleksi Kami</h2>
        <div className={styles.cards}>
          {books.map((book, index) => (
            <div key={index} className={styles.card}>
              <img src={book.image} alt={book.title} className={styles.cardImage} />
              <h3>{book.title}</h3>
              <p className={styles.descCard}>{book.description}</p>
              <button className={styles.detailButton}>Detail</button>
            </div>
          ))}
        </div>
      </div>
      
      <div className={styles.services}>
        <h2 className={styles.serviceHeading}>Layanan Kami</h2>
        <div className={styles.serviceCards}>
            {services.map((service, index) => (
                <div key={index} className={styles.serviceCard}>
                    <h4>{service.title}</h4>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
      </div>

      <div className={styles.articlesContainer}>
        <h2 className={styles.articlesHeading}>Artikel Kami</h2>
            {articles.map((article, index) => (
                <div key={index} className={styles.articleCard}>
                    <img src={article.image} alt={article.title} className={styles.articleImage} />
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                    <p className={styles.articleSummary}>{article.summary}</p>
                    <button className={styles.readMoreButton}>Continue Reading</button>
                </div>
            ))}
      </div>
      <footer className={styles.footer}>
          <p>© 2023 Projek Buku. Semua Hak Dilindungi Undang-Undang.</p>
      </footer>


    </div>
  );
}
