import React from 'react';
import styles from './Skill.module.css'
import JS from '../../../assets/images/js_logo.jpeg'

export const Skill = () => {
  return (
    <div className={styles.skill}>
      <div className={styles.skillImage}><img src={JS} alt="js"/></div>
      <div className={styles.skillTitle}>Title</div>
      <div className={styles.skillDescription}>description</div>

    </div>
  );
};
