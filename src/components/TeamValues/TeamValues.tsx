import { FC } from 'react';
import './TeamValues.css';
interface Value {
  title: string;
  description: string;
}

const values: Value[] = [
  {
    title: 'Pasión',
    description: 'Vivimos y respiramos fútbol americano',
  },
  {
    title: 'Compromiso',
    description: 'Dedicación total al equipo y al deporte',
  },
  {
    title: 'Excelencia',
    description: 'Buscamos la mejora continua',
  },
  {
    title: 'Familia',
    description: 'Somos más que un equipo, somos una familia',
  },
];

export const ValuesSection: FC = () => {
  return (
    <>
      <section className="values">
        <h2>Nuestros Valores</h2>
        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ValuesSection;
