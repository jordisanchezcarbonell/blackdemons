import React from 'react';
import styles from './HeaderTitle.module.css';

interface HeaderTitleProps {
  title: string;
  subtitle: string;
}

export const HeaderTitle: React.FC<HeaderTitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <section className={styles.HeaderTitle}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
};

export default HeaderTitle;
