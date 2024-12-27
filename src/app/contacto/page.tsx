import { HeaderTitle } from '@/components/HeaderTitle';
import styles from './ContactoPage.module.css';

export const metadata = {
  title: 'Contacto - Blackdemons',
  description: 'Conoce a los guerreros que defienden nuestros colores',
};

const options = [
  { value: 'join', label: 'Quiero unirme al equipo' },
  { value: 'sponsor', label: 'Patrocinio' },
  { value: 'other', label: 'Otro' },
];

export default function ContactoPage() {
  return (
    <main>
      {/* Hero Section */}
      <HeaderTitle
        title="Contacto"
        subtitle="Conoce a los guerreros que defienden nuestros colores"
      />

      {/* Contact Form */}
      <section className={styles.contactForm}>
        <form>
          {/* Nombre */}
          <div className={styles.formGroup}>
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" name="name" required />
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>

          {/* Asunto */}
          <div className={styles.formGroup}>
            <label htmlFor="subject">Asunto</label>
            <select id="subject" name="subject">
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Mensaje */}
          <div className={styles.formGroup}>
            <label htmlFor="message">Mensaje</label>
            <textarea id="message" name="message" required></textarea>
          </div>

          {/* Botón */}
          <button className={styles.buttonContact} type="submit">
            Enviar Mensaje
          </button>
        </form>
      </section>
    </main>
  );
}
