import { FC } from 'react';
import styles from './NewsSection.module.css';

interface NewsItem {
  title: string;
  date: string;
  excerpt: string;
  image: string;
}

const news: NewsItem[] = [
  {
    title: 'Victoria histórica en el campeonato',
    date: '2024-04-01',
    excerpt: 'El equipo logró una victoria memorable...',
    image: '/images/placeholder.svg',
  },
  {
    title: 'Nuevos fichajes para la temporada',
    date: '2024-03-28',
    excerpt: 'Blackdemons refuerza su plantilla...',
    image: '/images/placeholder.svg',
  },
  {
    title: 'Inicio de entrenamientos',
    date: '2024-03-25',
    excerpt: 'Comienza la preparación para...',
    image: '/images/placeholder.svg',
  },
];

export const LatestNews: FC = () => {
  return (
    <>
      <section className={styles['news']}>
        <h2>Últimas Noticias</h2>
        <div className={styles['news-grid']}>
          {news.map((item, index) => (
            <article className={styles['news-card']} key={index}>
              <img src={item.image} alt={item.title} />
              <div className={styles['news-content']}>
                <p className={styles['news-date']}>
                  {new Date(item.date).toLocaleDateString()}
                </p>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <a href="/noticias" className={styles['read-more']}>
                  Leer más
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default LatestNews;
