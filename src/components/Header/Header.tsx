import React from 'react';
import styles from './Header.module.css'
import {Navigation} from "./Navigation/Navigation";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Navigation/>
    </div>
  );
};
