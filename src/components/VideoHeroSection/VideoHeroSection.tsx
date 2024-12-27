import { FC } from 'react';
import styles from './VideoHeroSection.module.css';

export const VideoHeroSection: FC = () => {
  return (
    <>
      <section className={styles.videoHero}>
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={styles.videoBackground}
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          {/* Aquí podrías agregar un fallback */}
        </video>

        {/* Contenido Superpuesto */}
        <div className={styles.overlay}>
          <h1>BLACKDEMONS</h1>
          <p>Pasión y Excelencia en el Campo</p>
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

export default VideoHeroSection;
