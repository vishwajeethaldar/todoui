import React from 'react';
import styles from '../../style/modules/Template2.module.css';
import Footer from '../Footer';
import Header from '../Header';

export default function Template() {
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <Header/>
        </header>
        <nav className={styles.nav}>

        </nav>
        <main className={styles.main}>

        </main>
        <footer className={styles.footer}>
                <Footer/>
        </footer>
    </div>
  )
}
