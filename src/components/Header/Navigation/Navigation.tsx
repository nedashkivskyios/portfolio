import React from 'react';
import styles from './Navigation.module.css'

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className={styles.item}><a href={'#main'}>Main</a></div>
      <div className={styles.item}><a href={'#skills'}>Skills</a></div>
      <div className={styles.item}><a href={'#projects'}>Project</a></div>
      <div className={styles.item}><a href={'#contact'}>Contact</a></div>
    </div>
  );
};