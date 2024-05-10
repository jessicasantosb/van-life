import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&#169; 2024 VanLife </p>
      <p>
        Developed by{' '}
        <a
          href='https://github.com/jessicasantosb/van-life'
          target='_blank'
          rel='noopener noreferrer'
        >
          Jessica Bandeira
        </a>
      </p>
    </footer>
  );
}

export default Footer;
