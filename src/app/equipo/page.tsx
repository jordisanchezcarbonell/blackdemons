// app/equipo/page.tsx
import { RosterSection } from '@/components/RosterSection';
import TeamValues from '@/components/TeamValues/TeamValues';
import styles from './EquipoPage.module.css';
import { HeaderTitle } from '@/components/HeaderTitle';

export const metadata = {
  title: 'Equipo - Blackdemons',
  description: 'Conoce a los guerreros que defienden nuestros colores',
};

export default function EquipoPage() {
  return (
    <main>
      <HeaderTitle
        title="Equipo"
        subtitle="Conoce a los guerreros que defienden nuestros colores"
      />

      <RosterSection />
      <TeamValues />
    </main>
  );
}
