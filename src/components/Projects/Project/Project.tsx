import React from 'react';
import styles from './Project.module.css'
import ProjectImg from '../../../assets/images/project.jpeg'

export const Project = () => {
  return (
    <div className={styles.project}>
      <div className={styles.projectImage}>
        <img src={ProjectImg} alt="project"/>
        <a rel={'noreferrer'}
           target={'_blank'}
           href="https://nedashkivskyios.github.io/myTodoListTypeScript/"
        >
          <button className={styles.projectImageButton}>View</button>
        </a>
      </div>
      <div className={styles.projectTitle}>project title</div>
      <div className={styles.projectDescription}>project description</div>
    </div>
  );
};
