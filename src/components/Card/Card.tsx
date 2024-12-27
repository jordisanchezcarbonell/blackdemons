import { FC } from 'react';
import styles from './LinkCard.module.css';

interface LinkCardProps {
  title: string;
  body: string;
  href: string;
}

export const LinkCard: FC<LinkCardProps> = ({ title, body, href }) => {
  return (
    <>
      <li className={styles.linkCard}>
        <a href={href}>
          <h2>
            {title}
            <span>&rarr;</span>
          </h2>
          <p>{body}</p>
        </a>
      </li>
    </>
  );
};
