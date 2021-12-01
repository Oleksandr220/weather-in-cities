import React from 'react';
import styles from './PageWraper.module.scss';

const Conteiner = ({ title, children }) => {
  return (
    <>
      <header>
        <h2 className={styles.container__title}>{title}</h2>
      </header>
      <div className={styles.container}>{children}</div>
    </>
  );
};

export default Conteiner;
