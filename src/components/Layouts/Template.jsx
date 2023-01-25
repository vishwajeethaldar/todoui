import React from 'react';
import styles from '../../style/modules/Template.module.css';
import Footer from '../Footer';
import Header from '../Header';
import Navbar from '../Navbar';

export default function Template({children}) {
  
  return (
    <div className={styles.container}>
        <header className={styles.header}>
            <Header/>
        </header>
        <nav className={styles.nav}>
            <Navbar/>
        </nav>
        <main className={styles.main}>
        {children}
        </main>
        <footer className={styles.footer}>
                <Footer/>
        </footer>
    </div>
  )
}
