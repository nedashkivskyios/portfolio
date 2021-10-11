import React from 'react';
import styles from './Contact.module.css'

export const Contact = () => {
  return (
    <div id={'contact'} className={styles.contacts}>
      <div className={styles.contactsTitle}>
        Contact me
      </div>

      <form action="contacts">
        <div className={styles.contactsWrapper}>
          <div className={styles.contactsInput}><input type="text"/></div>
          <div className={styles.contactsInput}><input type="text"/></div>
          <div className={styles.contactsTA}><textarea name="contactsTextArea" id="contactsTextArea" cols={30}
                                                       rows={10}/></div>
        </div>
      </form>

      <div className={styles.contactsButton}>
        <button>Send</button>
      </div>
    </div>
  );
};
