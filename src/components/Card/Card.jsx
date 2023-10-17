import React from 'react';
import styles from './card.module.css';

function Card({ image, title, description, type }) {
    return (
        <div className={styles.card}>
            <img src={image} alt={title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
            {type === 'collection' && <button className={styles.cardButton}>Beli Sekarang</button>}
            {type === 'article' && <button className={styles.cardButton}>Baca Selengkapnya</button>}
        </div>
    );
}
export default Card;
