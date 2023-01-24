import React from 'react';
import styles from '../../style/modules/Template2.module.css';
import Footer from '../Footer';
import Header from '../Header';

export default function Template2({children}) {
  console.log(children);
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <Header/>
        </header>

        <main className={styles.main}>
           {children}
        </main>

        <footer className={styles.footer}>
                <Footer/>
        </footer>
    </div>
  )
}
