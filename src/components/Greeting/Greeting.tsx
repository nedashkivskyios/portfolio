import React from 'react';
import styles from './Greeting.module.css'
import Avatar from './myPhoto.jpg'

export const Greeting = () => {
  return (
    <div id={'main'} className={styles.greeting}>
      <div className={styles.greetingText}>
        <span>Hello, I am </span>
        <h2>Oleksandr Nedashkivskyi</h2>
        <p>I`m a React developer!</p>
      </div>
      <div className={styles.greetingImage}>
        <img src={Avatar}  alt="ava"/>
      </div>
    </div>
  );
};
