import React from 'react';
import styles from './Skill.module.css'

export const Skill = () => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillImage}>Image</div>
      <div className={styles.skillTitle}>Title</div>
      <div className={styles.skillDescription}>description</div>

    </div>
  );
};
