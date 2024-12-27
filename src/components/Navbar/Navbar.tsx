'use client';
import { FC, useState } from 'react';

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[rgba(26,26,26,0.95)]">
      <div className="relative mx-auto max-w-6xl px-4 py-2 flex justify-between items-center">
        {/* LOGO */}
        <a href="/" className="flex items-center">
          <img
            src="/images/logo.jpg"
            alt="Blackdemons Logo"
            className="h-24 w-auto md:h-32 md:w-auto drop-shadow-lg" // Tamaño más grande con sombra
          />
        </a>

        {/* Enlaces de navegación - solo en escritorio */}
        <ul className="hidden md:flex gap-8">
          <li>
            <a
              href="/equipo"
              className="text-white hover:text-[#ff3e3e] transition-colors duration-300"
            >
              Equipo
            </a>
          </li>
          <li>
            <a
              href="/calendario"
              className="text-white hover:text-[#ff3e3e] transition-colors duration-300"
            >
              Calendario
            </a>
          </li>
          <li>
            <a
              href="/noticias"
              className="text-white hover:text-[#ff3e3e] transition-colors duration-300"
            >
              Noticias
            </a>
          </li>
          <li>
            <a
              href="/contacto"
              className="text-white hover:text-[#ff3e3e] transition-colors duration-300"
            >
              Contacto
            </a>
          </li>
        </ul>

        {/* Botón hamburguesa - solo en móvil */}
        <button
          onClick={handleOpenMenu}
          className="inline-flex items-center p-2 w-10 h-10 justify-center
                     text-sm text-gray-300 rounded-md md:hidden
                     hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <span className="sr-only">Abrir menú principal</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Overlay a pantalla completa (sólo se muestra en mobile cuando isOpen = true) */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] bg-black bg-opacity-90 flex flex-col">
          {/* Botón de cierre en la esquina superior derecha */}
          <button
            onClick={handleCloseMenu}
            className="ml-auto mr-4 mt-4 text-white hover:text-red-400 text-3xl focus:outline-none"
          >
            &times; {/* Esto es la "X" de cierre */}
          </button>

          {/* Contenido del overlay: enlaces centrados vertical/horizontal */}
          <ul className="flex flex-col items-center justify-center flex-grow gap-8">
            <li>
              <a
                onClick={handleCloseMenu}
                href="/equipo"
                className="text-white text-xl hover:text-[#ff3e3e] transition-colors duration-300"
              >
                Equipo
              </a>
            </li>
            <li>
              <a
                onClick={handleCloseMenu}
                href="/calendario"
                className="text-white text-xl hover:text-[#ff3e3e] transition-colors duration-300"
              >
                Calendario
              </a>
            </li>
            <li>
              <a
                onClick={handleCloseMenu}
                href="/noticias"
                className="text-white text-xl hover:text-[#ff3e3e] transition-colors duration-300"
              >
                Noticias
              </a>
            </li>
            <li>
              <a
                onClick={handleCloseMenu}
                href="/contacto"
                className="text-white text-xl hover:text-[#ff3e3e] transition-colors duration-300"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
