import React from 'react';
import styles from './Pagination.module.css';

export default function Pagination({ count, current }) {
  return (
    <div className={styles.pagination}>
      {Array.from({ length: count }).map((_, idx) => (
        <div
          key={idx}
          className={`${styles.dot} ${idx === current ? styles.dotActive : ''}`}
          onClick={() => {
            const sec = document.getElementById(`section-${idx}`);
            if (sec) sec.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      ))}
    </div>
  );
}
