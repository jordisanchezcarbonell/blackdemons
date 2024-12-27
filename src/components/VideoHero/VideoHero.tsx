import { FC } from 'react';
import './VideoHero.css';

export const VideoHero: FC = () => {
  return (
    <>
      <section className="video-hero">
        <video autoPlay muted loop playsInline>
          <source src="/videos/intro.mp4" type="video/mp4" />
          {/* Aquí podrías manejar fallbacks u otros formatos de video si lo deseas */}
        </video>
        <div className="overlay">
          <h1>BLACKDEMONS2</h1>
          <p>Pasión y Excelencia en el Campo</p>
        </div>
      </section>
    </>
  );
};

export default VideoHero;
