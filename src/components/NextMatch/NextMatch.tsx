import { FC } from 'react';
import styles from './NextMatch.module.css';
import { BreakingNews } from '../BreakingNews';
export const NextMatch: FC = () => {
  return (
    <>
      <BreakingNews />
      <section className={styles['next-match']}>
        <h2>Próximo Partido</h2>
        <div className={styles['match-card']}>
          <div className={styles['team']}>
            <img src="/images/placeholder.svg" alt="Blackdemons Logo" />
            <h3>Blackdemons</h3>
          </div>
          <div className={styles['match-info']}>
            <p className={styles['date']}>Sábado, 15 de Mayo</p>
            <p className={styles['time']}>15:00</p>
            <p className={styles['versus']}>VS</p>
          </div>
          <div className={styles['team']}>
            <img src="/images/placeholder.svg" alt="Opponent Logo" />
            <h3>Rival</h3>
          </div>
        </div>
      </section>
    </>
  );
};

export default NextMatch;
