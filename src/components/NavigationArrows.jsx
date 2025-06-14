import React from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { motion } from 'framer-motion';
import styles from './NavigationArrows.module.css';

export default function NavigationArrows({ current, count }) {
  const scrollTo = (idx) => {
    const sec = document.getElementById(`section-${idx}`);
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className={styles.arrows}>
      {current > 0 && (
        <motion.div
          className={styles.arrow}
          whileHover={{ scale: 1.2 }}
          onClick={() => scrollTo(current - 1)}
        >
          <FiChevronUp />
        </motion.div>
      )}
      {current < count - 1 && (
        <motion.div
          className={styles.arrow}
          whileHover={{ scale: 1.2 }}
          onClick={() => scrollTo(current + 1)}
        >
          <FiChevronDown />
        </motion.div>
      )}
    </div>
  );
}
