import React from 'react';
import styles from './Footer.module.css'
import {FooterLink} from "./FooterLink/FooterLink";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerTitle}>
        Oleksandr Nedashkivskyi
      </div>
      <div className={styles.footerLinks}>
        <FooterLink />
        <FooterLink />
        <FooterLink />
        <FooterLink />
        <FooterLink />
      </div>
      <div className={styles.footerCopyright}>
        Copyright © 2021. All rights reserved.
      </div>
    </div>
  );
};
