import React from 'react';
import styles from './Skills.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
  return (
    <div id={'skills'} className={styles.skills}>
      <div className={styles.skillsTitle}>My skills</div>
      <div className={styles.skillsItems}>
        <Skill/>
        <Skill/>
        <Skill/>
      </div>

    </div>
  );
};
