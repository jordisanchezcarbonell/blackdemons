import { FC } from 'react';
import './SponsorsSection.css';
interface Sponsor {
  name: string;
  logo: string;
  url: string;
}

const sponsors: Sponsor[] = [
  {
    name: 'Sponsor 1',
    logo: '/images/placeholder.svg',
    url: '#',
  },
  {
    name: 'Sponsor 2',
    logo: '/images/placeholder.svg',
    url: '#',
  },
  {
    name: 'Sponsor 3',
    logo: '/images/placeholder.svg',
    url: '#',
  },
];

export const SponsorsSection: FC = () => {
  return (
    <>
      <section className="sponsors">
        <h2>Nuestros Patrocinadores</h2>
        <div className="sponsors-grid">
          {sponsors.map((sponsor, index) => (
            <a
              href={sponsor.url}
              className="sponsor-card"
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <img src={sponsor.logo} alt={`Logo de ${sponsor.name}`} />
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default SponsorsSection;
