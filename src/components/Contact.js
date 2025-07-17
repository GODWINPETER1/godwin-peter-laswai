import React from 'react';
import '../styles/Contact.css';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>{t('contact')}</h2>
        <div className="contact-wrapper">
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Message sent!');
            }}
          >
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>

          <div className="contact-info">
            <p>{t('Email')}: <a href="mailto:petergodwin432@gmail.com">petergodwin432@gmail.com</a></p>
            <p>{t('Phone')}: <a href="tel:+255765813811">+255 765 813 811</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/godwin" target="_blank" rel="noopener noreferrer">linkedin.com/in/godwin</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
