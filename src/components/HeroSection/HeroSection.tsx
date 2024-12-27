import { FC } from 'react';
import styles from './HeroSection.module.css';

export const HeroSection: FC = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>BLACKDEMONS</h1>
          <p>Pasión por el Fútbol Americano</p>
          <div className={styles.ctaButtons}>
            <a href="/unete" className={styles.ctaPrimary}>
              Únete al Equipo
            </a>
            <a href="/calendario" className={styles.ctaSecondary}>
              Ver Calendario
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
