import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SplashScreen.module.css';

const name = 'Abdulaziz Alshehhri';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
      when: 'beforeChildren',
    }
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.2, ease: 'easeInOut' }
  }
};

const letterVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: i => ({
    y: [30, 0, -5, 0],
    opacity: [0, 1, 1, 1],
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      times: [0, 0.3, 0.6, 1],
      delay: i * 0.05
    }
  })
};

export default function SplashScreen({ onComplete }) {
  useEffect(() => {
    const t = setTimeout(onComplete, 1500);
    return () => clearTimeout(t);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <motion.div className={styles.name} variants={containerVariants}>
          {name.split('').map((char, idx) => (
            <motion.span
              key={idx}
              className={styles.letter}
              custom={idx}
              variants={letterVariants}
            >
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
