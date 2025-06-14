import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectPage.module.css';

const partVariants = [
  { hidden: { x: -100, opacity: 0 }, visible: { x: 0, opacity: 1, transition: { duration: 0.6 } } },
  { hidden: { scale: 0.8, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2 } } },
  { hidden: { y: 100, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.4 } } },
];

export default function ProjectPage({ id, project, variant }) {
  return (
    <motion.section
      id={id}
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      <div className={styles.content}>
        <h2 className={styles.title}>{project.title}</h2>
        <p className={styles.description}>{project.description}</p>
        <div className={styles.demoPlaceholder}>Demo Area Placeholder</div>
      </div>

      <div className={styles.imageParts}>
        {project.imageParts.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`${project.title} part ${i + 1}`}
            className={`${styles.imagePart} ${styles['part' + i]}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={partVariants[i]}
          />
        ))}
      </div>
    </motion.section>
  );
}
