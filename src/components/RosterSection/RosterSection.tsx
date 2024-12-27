import { FC } from 'react';
import './RosterSection.css';
interface Player {
  number: string;
  name: string;
  position: string;
  image: string;
}

const roster: Player[] = [
  {
    number: '12',
    name: 'Carlos Rodríguez',
    position: 'QB',
    image: '/images/placeholder.svg',
  },
  {
    number: '84',
    name: 'Miguel Ángel García',
    position: 'WR',
    image: '/images/placeholder.svg',
  },
  {
    number: '55',
    name: 'David López',
    position: 'LB',
    image: '/images/placeholder.svg',
  },
];

export const RosterSection: FC = () => {
  return (
    <>
      <section className="roster">
        <h2>Nuestro Equipo</h2>
        <div className="roster-grid">
          {roster.map((player, index) => (
            <div className="player-card" key={index}>
              <div className="player-image">
                <img src={player.image} alt={player.name} />
                <div className="player-number">{player.number}</div>
              </div>
              <div className="player-info">
                <h3>{player.name}</h3>
                <p className="position">{player.position}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default RosterSection;
