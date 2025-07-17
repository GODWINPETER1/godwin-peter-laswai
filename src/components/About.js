import React from 'react';
import '../styles/About.css';
import { useTranslation, Trans } from 'react-i18next';
import profileImage from '../assets/about1.jpeg';
import { motion } from 'framer-motion';

function About() {
  const { t } = useTranslation();

  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <motion.div
          className="about-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {t('Hi')}, {t("I’m")} <span className="accent">Godwin!</span>
          </motion.h1>

          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Full Stack <span className="highlight">DEVELOPER</span>
          </motion.h2>

          <motion.p
            className="about-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <Trans i18nKey="aboutParagraph">
              I’m a passionate developer with a mission to create delightful and scalable web experiences.
              I specialize in building modern apps using <strong>React</strong>, <strong>Node</strong>, and <strong>Python</strong>.
            </Trans>
          </motion.p>

          <motion.div
            className="about-buttons"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <a href="#contact" className="btn primary">{t('Let\'s Connect')} ✉️</a>
            <a href="#projects" className="btn secondary">{t('See My Work')} 💼</a>
          </motion.div>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <div className="hexagon-wrapper">
            <img src={profileImage} alt="Godwin" className="profile-pic" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
