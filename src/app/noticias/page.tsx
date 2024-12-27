// app/noticias/page.tsx
import React from 'react';
import styles from './NoticiasPage.module.css';
import NewsSection from '@/components/NewsSection/NewsSection';
import { HeaderTitle } from '@/components/HeaderTitle';
export const metadata = {
  title: 'Noticias - Blackdemons',
  description: 'Mantente al día con todas las novedades del equipo',
};
export default function NoticiasPage() {
  return (
    <main>
      <HeaderTitle
        title="Noticias"
        subtitle="Mantente al día con todas las novedades del equipo"
      />

      <NewsSection />
    </main>
  );
}
