import React from 'react';
import styles from './Remote.module.css'

export const Remote = () => {
  return (
    <div className={styles.remote}>
      <div className={styles.remoteBlock}>
        <div className={styles.remoteText}>
          Open to remote work.
        </div>
        <div className={styles.remoteButton}>
          <button>
            hire me
          </button>
        </div>
      </div>
    </div>
  );
};
