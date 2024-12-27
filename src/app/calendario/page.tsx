// app/calendario/page.tsx
import React from 'react';
import styles from './CalendarPage.module.css';
import { HeaderTitle } from '@/components/HeaderTitle';

// Opcional: Para configurar el title y descripción de la página
export const metadata = {
  title: 'Calendario - Blackdemons',
  description: 'Próximos partidos y eventos',
};

export default function CalendarioPage() {
  const events = [
    {
      day: 15,
      month: 'MAY',
      team: 'Equipo 1',
      time: '15:00',
      location: 'Estadio Municipal',
    },
    {
      day: 16,
      month: 'MAY',
      team: 'Equipo 2',
      time: '16:00',
      location: 'Estadio Municipal',
    },
    {
      day: 17,
      month: 'MAY',
      team: 'Equipo 3',
      time: '17:00',
      location: 'Estadio Municipal',
    },
    {
      day: 18,
      month: 'MAY',
      team: 'Equipo 4',
      time: '18:00',
      location: 'Estadio Municipal',
    },
    {
      day: 19,
      month: 'MAY',
      team: 'Equipo 5',
      time: '19:00',
      location: 'Estadio Municipal',
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <HeaderTitle title="Calendario" subtitle="Próximos partidos y eventos" />

      {/* Calendar Section */}
      <section className={styles.calendar}>
        <div className={styles.calendarGrid}>
          {events.map((event, i) => (
            <div key={i} className={styles.calendarItem}>
              <div className={styles.date}>
                <span className={styles.day}>{event.day}</span>
                <span className={styles.month}>{event.month}</span>
              </div>
              <div className={styles.eventInfo}>
                <h3>Blackdemons vs {event.team}</h3>
                <p className={styles.time}>{event.time}</p>
                <p className={styles.location}>{event.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
