import React from 'react';
import styles from './Projects.module.css'
import {Project} from "./Project/Project";

export const Projects = () => {
  return (
    <div id={'projects'} className={styles.projects}>
      <div className={styles.projectsTitle}>My Projects</div>
      <div className={styles.projectsItems}>
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
};
