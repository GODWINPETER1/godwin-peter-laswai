import React from 'react';
import '../styles/Projects.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Projects() {
  const { t } = useTranslation();

  const projectList = [
    {
      title: 'Task Management System',
      description: 'A Trello-like system with drag & drop, labels, calendar, and collaboration features.',
      tech: ['React', 'Python', 'PostgreSQL'],
      link: 'https://github.com/GODWINPETER1/full_stack_task_management_system.git',
      type: 'code'
    },
    {
      title: 'Personal Finance Management',
      description: 'Personal tracker to track all your day to day expenses.',
      tech: ['React', 'Node.js', 'MySQL'],
      link: 'https://github.com/GODWINPETER1/person_fincance_tracker.git',
      type: 'code'
    },
    {
      title: 'Client Portfolio',
      description: 'Client personal portfolio showcasing his projects, achievement, and mission.',
      tech: ['React', 'CSS Modules', 'Vite'],
      link: 'https://godlove-portfolio-one.vercel.app/',
      type: 'View Website'
    },
    {
      title: 'Famhub Company Website',
      description: 'Design & Develped using wordpress.',
      tech: ['Wordpress', 'PHP'],
      link: 'https://www.famhub.co.tz/',
      type: 'View Website'
    },
    {
      title: "E-commerce Website",
      description: "Design & Development using React , Tailwind and Redux Toolkit",
      tech: ['React', 'Redux Toolkit', 'TailwindCss'],
      link: "https://e-shopping-mocha.vercel.app/",
      type: 'View Website'
    },
    {
      title: "Nike Landing Page",
      description: "Responsive React.js website",
      tech: ['React', 'Redux Toolkit', 'TailwindCss'],
      link: "https://nike-landing-page-ruddy-three.vercel.app/",
      type: 'View Website'
    },
    {
      title: "Coffee Shop ",
      description: "Responsive Vanilla JS and Bootstrap website",
      tech: ['Vanilla js', 'HTML', 'CSS'],
      link: "https://velvety-lebkuchen-52708b.netlify.app",
      type: 'View Website'
    },
    {
      title: "Ai-landing Page",
      description: "Design & Development using React , Vite and Tailwind",
      tech: ['React', 'Vite', 'TailwindCss'],
      link: "https://ai-landing-page-gilt.vercel.app/",
      type: 'View Website'
    },
  ];

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {t('projects')}
        </motion.h2>

        <motion.div
          className="projects-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projectList.map((project, idx) => (
            <motion.div
              className="project-card"
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((techItem, i) => (
                  <span className="tech-item" key={i}>{techItem}</span>
                ))}
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                {project.type === 'code' ? "View Code" : "View Website"} ↗
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
