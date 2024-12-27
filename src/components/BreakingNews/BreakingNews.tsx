'use client';
import { useEffect, useState } from 'react';
import styles from './BreakingNews.module.css';

const news = [
  'BLACKDEMONS CLASIFICA A LA FINAL DEL CAMPEONATO NACIONAL',
  'NUEVO RÉCORD DE ASISTENCIA EN EL ÚLTIMO PARTIDO DE LOCAL',
];

export const BreakingNews = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(
      new Date().toLocaleDateString('es-ES', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    );
  }, []);

  // Duplica las noticias para crear un efecto infinito sin solapamientos
  const duplicatedNews = [...news, ...news];

  return (
    <div className={styles.breakingNews}>
      <div className={styles.breakingNewsContainer}>
        {/* Label de Breaking News */}
        <div className={styles.breakingLabel}>BREAKING NEWS</div>
        {/* Fecha actual */}
        <div className={styles.dateLabel}>{currentDate}</div>
        {/* Noticias en bucle */}
        <div className={styles.newsSlider}>
          {duplicatedNews.map((item, index) => (
            <span key={index} className={styles.newsItem}>
              <span className={styles.separator}>//</span>
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
