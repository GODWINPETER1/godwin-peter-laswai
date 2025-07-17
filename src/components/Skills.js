import React from 'react';
import '../styles/Skills.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Skills() {
  const { t } = useTranslation();

  const skills = [
    'React.js',
    'JavaScript (ES6+)',
    'HTML5 & CSS3',
    'Node.js',
    'Express.js',
    'Python',
    'Django',
    'PostgreSQL',
    'MongoDB',
    'Git & GitHub',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="skills-section" id="skills">
      <motion.div
        className="skills-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {t('skills')}
        </motion.h2>

        <motion.ul className="skills-list" variants={containerVariants}>
          {skills.map((skill, index) => (
            <motion.li key={index} className="skill-item" variants={itemVariants}>
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}

export default Skills;
