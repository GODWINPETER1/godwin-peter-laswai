import React from 'react';
import '../styles/Projects.css';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

function Projects() {
  const { t } = useTranslation();

  const projectList = [
    {
      title: 'Task Management System',
      description: 'projectDescription.taskManagement',
      tech: ['React', 'Python', 'PostgreSQL'],
      link: 'https://github.com/GODWINPETER1/full_stack_task_management_system.git',
      type: 'code'
    },
    {
      title: 'Personal Finance Management',
      description: 'projectDescription.financeTracker',
      tech: ['React', 'Node.js', 'MySQL'],
      link: 'https://github.com/GODWINPETER1/person_fincance_tracker.git',
      type: 'code'
    },
     {
      title: 'Booking Web App',
      description: 'A modern flight booking web application built with React + TypeScript on the frontend and Node.js with Express on the backend. The system allows users to search flights, explore popular destinations, view special promotions, read testimonials, and subscribe to newsletters. Designed with a responsive and user-friendly UI, this project demonstrates full-stack development skills including REST API integration, state management, and database connectivity.',
      tech: ['React', 'Node.js', 'MySQL'],
      link: 'https://github.com/GODWINPETER1/plane-booking-web.git',
      type: 'code'
    },
    {
      title: 'Chief Godlove Portfolio',
      description: 'projectDescription.clientPortfolio',
      tech: ['React', 'CSS Modules', 'Vite'],
      link: 'https://www.chiefgodlove.vip/',
      type: 'View Website'
    },
    {
      title: 'Famhub Company Website',
      description: 'projectDescription.famhub',
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
    {
      title: "Ai-landing Page",
      description: "Design & Development using React , Vite and Tailwind",
      tech: ['React', 'Vite', 'TailwindCss'],
      link: "https://ai-landing-page-gilt.vercel.app/",
      type: 'View Website'
    },

    {
      title: "Movie List App",
      description: "A movie listing web app with search and genre-based filtering, built using React, Vite, and Tailwind CSS.",
      tech: ["React", "Vite", "Tailwind CSS"],
      link: "https://movie-list-frontend-project.vercel.app/",
      type: "View Project"
    },
    {
      title: "Panafricatourism Board",
      description: "Pan Africa Tourism Board (PATBoard) is a continental tourism platform dedicated to positioning Africa as a unified, world-class travel destination.",
      tech: ['Wordpress'],
      link: "https://www.panafricatourismboard.com/",
      type: "View Website"
    },
    {
      title: "Barongo General Supply",
      description: "Barongo General Supply Ltd is a Tanzian-based supplier specializing in high-quality building materials, particularly tiles and gypsum products.",
      tech: ['React' , 'Vite' , 'Tailwind , Nodejs' , 'Mysql'],
      link: "https://barongogeneralsupplyltd.co.tz/",
      type: "View Website"
    },
    {
      title: "Tawima",
      description: "A movie listing web app with search and genre-based filtering, built using React, Vite, and Tailwind CSS.",
      tech: ['Wordpress'],
      link: "https://tawima.or.tz/",
      type: "View Website"
    },
    {
      title: "Pamoja We Can Website",
      description: "A movie listing web app with search and genre-based filtering, built using React, Vite, and Tailwind CSS.",
      tech: ['React' , 'Vite' , 'Tailwind' , 'Nodejs' , 'Mysql'],
      link: "https://test.pamojawecan.org/",
      type: "View Website"
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
              <p>{t(project.description)}</p>
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
