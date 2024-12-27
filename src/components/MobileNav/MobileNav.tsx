'use client';
import { FC, useState } from 'react';
import styles from './MobileNav.module.css';

export const MobileNav: FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  const handleMenuToggle = () => {
    setMenuActive((prev) => !prev);
  };

  return (
    <>
      <div className={styles.mobileNav}>
        <button
          id="menuButton"
          className={`${styles.menuButton}  ${menuActive ? 'active' : ''}`}
          onClick={handleMenuToggle}
        >
          <span />
          <span />
          <span />
        </button>
        <div
          id="mobileMenu"
          className={`${styles.mobileMenu} ${menuActive ? 'active' : ''}`}
        >
          <a href="/">Inicio</a>
          <a href="/equipo">Equipo</a>
          <a href="/calendario">Calendario</a>
          <a href="/noticias">Noticias</a>
          <a href="/contacto">Contacto</a>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
