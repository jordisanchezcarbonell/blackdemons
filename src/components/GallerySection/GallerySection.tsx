import { FC } from 'react';
import styles from './GallerySection.module.css';

interface ImageItem {
  url: string;
  title: string;
  description: string;
}

// Puedes mover estos datos a un archivo separado o recibirlos como props
const images: ImageItem[] = [
  {
    url: '/images/placeholder.svg',
    title: 'Último partido',
    description: 'Victoria contra los Raiders',
  },
  {
    url: '/images/placeholder.svg',
    title: 'Entrenamiento',
    description: 'Preparación física',
  },
  {
    url: '/images/placeholder.svg',
    title: 'Equipo completo',
    description: 'Temporada 2024',
  },
];

export const ImageGallery: FC = () => {
  return (
    <>
      <section className={styles.gallery}>
        <h2>Galería de Imágenes</h2>
        <div className={styles.galleryGrid}>
          {images.map((image, index) => (
            <div className={styles.galleryItem} key={index}>
              <img src={image.url} alt={image.title} />
              <div className={styles.imageOverlay}>
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ImageGallery;
